import "./AdminHeader.css";

export default function AdminHeader() {

  return (

    <header className="admin-header-top">

      {/* LEFT SIDE */}

      <div className="header-left">

        <h2>Admin Dashboard</h2>

        <p>
          Manage enquiries, careers, orders and payments
        </p>

      </div>

      {/* RIGHT SIDE */}

      <div className="header-right">

        <div className="admin-profile">

          <div className="admin-avatar">
            A
          </div>

          <div className="admin-info">

            <h4>Admin</h4>

            <p>SNDF Security</p>

          </div>

        </div>

      </div>

    </header>

  );
}