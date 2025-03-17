import * as S from './style'

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
                </S.Table>
            </S.Container>
        </S.Main>

    )

}