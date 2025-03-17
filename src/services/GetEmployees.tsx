import { useEffect, useState } from "react"

type Employee = {
    id: number
    name: string,
    job: string,
    admission_date: string,
    phone: string,
    image: string
}

export const GetEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/employees')
            .then(response => response.json())
            .then(data => setEmployees(data))
    }, [])

    return employees
}