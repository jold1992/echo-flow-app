
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import React, { FC } from 'react'

interface PrincipalProps {
    session: Session,
}

const Principal: FC<PrincipalProps> = ({ session }) => {
    return (
        <div className='text-white grid'>
            Bienvenido {session.user.name}
            <button className='border-2' onClick={() => signOut()}>Salir</button>
        </div>
    )
}

export default Principal;