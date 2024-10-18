import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import JobListing from '../components/JobListing';
import Spinner from '../components/Spinner';


const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? 'http://localhost:5000/jobs?_limit=3' : 'http://localhost:5000/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                console.log("Fetched jobs:", data);
                setJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
            <Spinner loading={loading} />
        ) : (
            <div>
                {jobs.map((job) => (
                    <JobListing key={job.id} job={job} />
                ))}
            </div>
        )}
      </div>
    </section>
  )
}

JobListings.propTypes = {
    isHome: PropTypes.bool,
};

export default JobListings
