import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Title, Form, RepositoryList, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storared = localStorage.getItem('@GithubExplorer:repositories');
    if (storared) {
      return JSON.parse(storared);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setErrorMessage('');

    try {
      if (!newRepo) {
        setErrorMessage('Digite o autor/nome do repositório');
        return;
      }

      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repositorio = response.data;

      setRepositories([...repositories, repositorio]);
      setNewRepo('');
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(
        'Erro ao buscar o respositório. Verifique se ele existe e tente novamente',
      );
    }
  };

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!errorMessage} onSubmit={handleAddRepository}>
        <input
          type="search"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={({ target: { value } }) => setNewRepo(value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {errorMessage && <Error>{errorMessage}</Error>}

      <RepositoryList>
        {repositories.map(repository => (
          <a key={repository.full_name} href="#">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </RepositoryList>
    </>
  );
};

export default Dashboard;
