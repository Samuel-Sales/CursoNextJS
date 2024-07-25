import { useCallback, useState } from 'react';
import { Container, Form, SubmitButton } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa';
import api from '../../services/api';

export default function Main() {
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        async function submit() {

            const response = await api.get(`respos/${newRepo}`);
            const data = {
                name: response.data.full_name,
            }

            setRepositorios([...repositorios, data]);
            setNewRepo('');
        }

        submit();
    }, [newRepo, repositorios])

    function handleInputChange(event) {
        setNewRepo(event.target.value);
    }

    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meu Repositorios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input type="text" value={newRepo} onChange={handleInputChange} placeholder='Adicionar Repositorios' />
                <SubmitButton>
                    <FaPlus color='#FFF' size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
};