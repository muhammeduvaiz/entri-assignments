import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";


const Home = () => {
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    const handleSerch = (e) => {
        e.preventDefault();
        console.log("User ID:", userId);
        navigate(`/user/${userId}`);
    }



    return (
        <div style={{ padding: '20px' }}>
            <h1>Search User</h1>
            <div
                style={{
                    display: 'flex',
                    gap: '10px'
                }}
            >
                <input
                    type="number"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <CustomButton label="Serch User"
                 handleButtonClick={handleSerch} 
                 userId={userId} />
            </div>
        </div>
    );
};
export default Home;