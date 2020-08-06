import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForms';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso! XD');
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('casdatrado com sucesso');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          type="text"
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
          type="text"
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          type="text"
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastro de categoria
      </Link>
    </PageDefault>
  );
}
export default CadastroVideo;
