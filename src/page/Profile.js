import { useParams } from "react-router-dom";

const profileData = {
    bangsung: {
        name: '백설공주',
        description: '백설공주는 제 친구입니다.'
    },
    gildong: {
        name: '백설홍길',
        description: '동화속은 주인공입니다'
    }
}

export const Profile = () => { //그값이 match에
    // useParams -> 한마디로 현재 페이지에 파라미터 값을 가지고 온다
    const { username } = useParams(); //현재 해당페이지 파라미터값이 username 변수에 담긴거야
    console.log("useParams =>  "+username)
    
    //현재 있는 데이터 해당 사람이 있는지 없으면 false 있으면 true
    const profile = profileData[username];
    console.log("profileData =>  "+profile)

    if(!profile){
        return <div>존재하지 않는 유저입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}