import useFetch from './useFetch';

const CustomHooks = () => {
    const [data] = useFetch('https://api.github.com/users/sukhendralodhi');

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{data.login}</h1>
            <img className="user" src={data.avatar_url} alt={data.login} style={{ width: '150px', borderRadius: '25px' }} />
            <p>{data.bio}</p>
            <p>{data.location}</p>
        </div>
    );
};

export default CustomHooks;