import * as S from './style'
import { GetEmployees } from '../../services/GetEmployees'

export const Employees = () => {
    return (
        <S.Main>
            <S.Container>
                <div>
                    <h1>Funcionários</h1>

                    <S.Input type="text"
                        placeholder='Pesquisar' />
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
                        {GetEmployees().map(employee => (
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