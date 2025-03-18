import * as S from './style'
import { GetEmployees } from '../../services/GetEmployees'
import iconeSearch from '../../assets/images/iconeSearch.png'
import { useState } from 'react'

export const Employees = () => {
    const [search, setSearch] = useState('')
    const employees = GetEmployees()

    const filterEmployees = employees.filter(employee => {
        return (
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.job.toLowerCase().includes(search.toLowerCase()) ||
        employee.phone.includes(search)
        )
    })

    // const handleSearch = () => {
    //     if (search === '') {
    //         return employees
    //     } else {
    //         return filteredEmployees
    //     }
    // }

    return (
        <S.Main>
            <S.Container>
                <div>
                    <h1>Funcionários</h1>

                    <S.ContainerInput>
                        <S.Input
                            type="text"
                            placeholder='Pesquisar'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <img
                            src={iconeSearch}
                            alt="ícone de pesquisa"
                            />
                    </S.ContainerInput>

                </div>

                <S.Table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Data de admissão</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filterEmployees.map(employee => (
                            <tr key={employee.id}>
                                <td><img src={employee.image} alt={employee.name} /></td>
                                <td>{employee.name}</td>
                                <td>{employee.job}</td>
                                <td>{employee.admission_date}</td>
                                <td><span>{employee.phone}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </S.Table>
            </S.Container>
        </S.Main>

    )
}
