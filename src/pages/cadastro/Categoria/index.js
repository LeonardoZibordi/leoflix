import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        //chave: nome, descricao, cor, bla, bli ...
        setValues({
            ...values,
            [chave]: valor, //nome:'valor' ou descrocao:'valor' ...
        })
    }
    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria"
                    value={values.nome}
                    onChange={handleChange}
                    name='nome'
                    type="text"
                />

                <div>
                    <label>
                        Descrição
                    <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Cor
                    <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>



            <Link to="/">
                Ir para home
            </Link>

        </PageDefault>
    )
}
export default CadastroCategoria