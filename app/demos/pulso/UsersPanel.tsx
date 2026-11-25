import { seedUsers } from "./content";

export function UsersPanel() {
  return (
    <div>
      <div>
        <h1 className="pl-admin-display text-[26px]">Usuarios</h1>
        <p className="mt-1 text-[13px] text-[var(--pa-muted)]">
          Roles del panel. En la versión real aquí se crean usuarios con
          contraseña temporal.
        </p>
      </div>

      <div className="mt-5 overflow-x-auto border border-[var(--pa-line)] bg-[var(--pa-surface)]">
        <table className="pl-admin-table min-w-[640px]">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {seedUsers.map((user) => (
              <tr key={user.id}>
                <td className="font-semibold">{user.name}</td>
                <td className="text-[var(--pa-muted)]">{user.email}</td>
                <td>
                  <span
                    className={
                      user.role === "owner"
                        ? "pl-badge pl-badge-good"
                        : "pl-badge pl-badge-muted"
                    }
                  >
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className="pl-badge pl-badge-good">
                    {user.active ? "activo" : "inactivo"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 border border-[var(--pa-line)] bg-[var(--pa-surface)] p-4 text-[12px] leading-relaxed text-[var(--pa-muted)]">
        <p className="font-semibold text-[var(--pa-ink)]">Demo sin login</p>
        <p className="mt-1">
          El panel está abierto para revisar la gestión del catálogo. En la
          entrega real, el acceso se protege con email, contraseña y roles
          owner/editor.
        </p>
      </div>
    </div>
  );
}
