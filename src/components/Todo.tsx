import React, { useState, useEffect } from 'react';

const Todo: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [missions, setMissions] = useState<string[]>(['Explore the Moon', 'Study Stars']);
    const [completedMissions, setCompletedMissions] = useState<string[]>([]);
    const [reward, setReward] = useState<string | null>(null);
    const [newMission, setNewMission] = useState<string>(''); // New state for input

    useEffect(() => {
        if (completedMissions.length > 0) {
            setLoading(true);

            const apiKey = 'YOUR_NASA_API_KEY';
            const apiUrl = 'https://api.nasa.gov/insight_weather/';

            fetch(`${apiUrl}?api_key=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching NASA API:', error);
                    setLoading(false);
                });
        }
    }, [completedMissions]);

    // Use a separate useEffect for updating the reward
    useEffect(() => {
        if (completedMissions.length > 0) {
            const spaceFacts = [
                "The first living creatures in space were fruit flies, launched by the U.S. in 1947.",
                "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
                "A day on Venus is longer than its year. It takes Venus about 243 Earth days to fully rotate on its axis, but only about 225 days to orbit the sun.",
            ];

            const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
            setReward(randomFact);
        }
    }, [completedMissions]);

    const addMission = (mission: string) => {
        setMissions([...missions, mission]);
    };

    const completeMission = (index: number) => {
        const mission = missions[index];
        setCompletedMissions([...completedMissions, mission]);
        setMissions(missions.filter((_, i) => i !== index));
    };

    const handleNewMissionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMission(event.target.value);
    };

    const handleAddMission = () => {
        if (newMission.trim() !== '') {
            addMission(newMission);
            setNewMission(''); // Clear the input field
        }
    };

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4">Space To-Do List</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Missions</h2>
                <ul>
                    {missions.map((mission, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <span className="mr-2">{mission}</span>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
                                onClick={() => completeMission(index)}
                            >
                                Complete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Add a New Mission</h2>
                <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                    value={newMission}
                    onChange={handleNewMissionChange}
                />
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded"
                    onClick={handleAddMission}
                >
                    Add
                </button>
            </div>
            <div>
                <h2>Completed Missions</h2>
                <ul>
                    {completedMissions.map((mission, index) => (
                        <li key={index}>{mission}</li>
                    ))}
                </ul>
                <div>
                    {loading ? <p>Loading...</p> : reward && <p>Space Fact Reward: {reward}</p>}
                </div>
            </div>

        </div>
    );
};

export default Todo;
