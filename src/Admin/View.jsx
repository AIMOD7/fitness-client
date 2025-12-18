
import React, { useEffect, useState } from "react";
import Adminpanel from "./Adminpanel";
import { getUsers, getAdmins } from "../service/api.js";

const View = () => {
    const [users, setUser] = useState([]);
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        getAllUsers();
        getAllAdmins();
    });

    const getAllUsers = async () => {
        const res = await getUsers();
        setUser(res.data);
    }

    const getAllAdmins = async () => {
        const res = await getAdmins();
        setAdmins(res.data);
    }

    return (
        <>
            <Adminpanel />
            <div className="container mt-5 admin-content">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="pt-2">All User's Details</h6>
                                </div>
                                <div className="card-body">
                                    <table className="table table-responsive w-100 table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Name</th>
                                                <th>Password</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((item, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.password}</td>
                                                        <td>
                                                            {item.status === 0 ? <span className="badge rounded-pill text-bg-success">Active</span> : <span className="badge rounded-pill text-bg-warning">In-active</span>}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="pt-2">All Admin's Details</h6>
                                </div>
                                <div className="card-body">
                                    <table className="table table-responsive w-100 table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {admins.map((item, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.mail}</td>
                                                        <td><img src={item.image} alt={item.name} width="50" /></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View;