import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, RepositoryList } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="search" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <RepositoryList>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/31572213?s=400&u=21439da49fcfab26c51250600617a28f6ce4834a&v=4"
            alt="Avatar"
          />
          <div>
            <strong>Titulo</strong>
            <p>texto descritivo do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/31572213?s=400&u=21439da49fcfab26c51250600617a28f6ce4834a&v=4"
            alt="Avatar"
          />
          <div>
            <strong>Titulo</strong>
            <p>texto descritivo do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/31572213?s=400&u=21439da49fcfab26c51250600617a28f6ce4834a&v=4"
            alt="Avatar"
          />
          <div>
            <strong>Titulo</strong>
            <p>texto descritivo do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </RepositoryList>
    </>
  );
};

export default Dashboard;
