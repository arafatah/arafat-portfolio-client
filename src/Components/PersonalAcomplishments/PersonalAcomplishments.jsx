const PersonalAccomplishment = ({ title, value }) => {
    return (
        <div className="flex-shrink-0 max-w-sm mx-auto md:px-10 p-4 md:py-5 bg-gray-800 rounded-md shadow-md mb-4 sm:mb-0">
            <h3 className="text-3xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400">{value}</p>
        </div>
    );
};

const PersonalAccomplishments = () => {
    const accomplishments = [
        { title: '20+', value: 'Open Source Projects' },
        { title: '25+', value: 'GitHub Followers' },
        { title: '40+', value: 'GitHub Stars' },
        { title: '500+', value: 'LinkedIn Connections' },
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-6 mt-10">
            <h2 className="text-3xl font-bold mb-6 ">Personal Accomplishments</h2>
            <div className="flex flex-wrap justify-center max-w-4xl mx-4">
                {accomplishments.map((accomplishment, index) => (
                    <PersonalAccomplishment key={index} {...accomplishment} />
                ))}
            </div>
        </div>
    );
};

export default PersonalAccomplishments;
