import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './Component/Profile';
import Display from './Component/Display';
import Faculty from "./Component/Faculty"
import Question_sheet from "./Component/Question_Sheet";
import Answer_sheet from "./Component/Answer_Sheet";
import Teacherdash from "./Component/Teacherdash";
import Login from './Component/Login';
import Logout from "./Component/Logout";
import Admindash from "./Component/Admindash";


class MainFile extends Component {
    render() {
        return (
            <BrowserRouter>
                <Login />
                {/* <Admindash/> */}
                <Routes>
                    <Route path="/faculty" element={<Faculty />} />
                    <Route path="/question" element={<Question_sheet />} />
                    <Route path="/answer" element={<Answer_sheet />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/display" element={<Display />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        )
    }
};
export default MainFile;