import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome 
        ? 'https://reacthire-jobs-json.onrender.com/jobs?_limit=3' 
        : 'https://reacthire-jobs-json.onrender.com/jobs';

      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
        setError(error.message); // Optional: Implement error handling
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]); // Add isHome to the dependency array

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {error && <p className='text-red-500'>{error}</p>} {/* Optional Error Message */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default JobListings;
