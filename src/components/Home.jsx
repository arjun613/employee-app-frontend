import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            getData();
        }, []
    )
    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setData(response.data);
                // handle success
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row ">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-3">
                    <div className="row">
                        {data.map((value, index) => {
                            return <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 g-3">
                                <div class="card" >
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.id}  .{value.name}</h5>
                                        <p class="card-text">{value.email}</p>
                                        <a href="#" class="btn btn btn-outline-info btn-sm disabled">View</a>
                                    </div>
                                    <div class="card-footer text-muted">
                                        {value.website}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home