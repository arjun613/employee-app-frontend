import React from 'react'

const Navbar = () => {
    return (
        <><nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">ICTAK</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link " aria-current="page" href="/">Home</a>
                        <a href="/addemployee" class="btn  btn-outline-success ">Add Employee</a>
                    </div>
                </div>
            </div>
        </nav></>
    )
}

export default Navbar