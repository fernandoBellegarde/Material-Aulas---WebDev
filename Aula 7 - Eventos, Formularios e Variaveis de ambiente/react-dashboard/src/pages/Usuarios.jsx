import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState, useEffect } from "react"

export default function Usuarios() {
  const [users, setUsers] = useState([])
  const API_URL = import.meta.env.VITE_API_USERS

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [API_URL])

  function handleClick(userId) {
    console.log("Usuário clicado:", userId)
  }
  function handleDelete(userId) {
    console.log("Deletar usuário:", userId)
  }

  return (
    <>
    <h1 className="text-5xl font-bold mb-4">Usuários</h1>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">
              <button className="text-blue-500 hover:underline" onClick={() => handleClick(user.id)}>Editar</button>
              <button className="text-red-500 hover:underline ml-4" onClick={() => handleDelete(user.id)}>Excluir</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </>
  )
}
