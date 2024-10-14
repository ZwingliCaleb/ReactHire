import { Link } from 'react-router-dom';

const ViewAllJobs = () => {
  return (
    <section>
      <Link
        to="/jobs"
        className="block bg-black text-white text-center rounded-xl px-6 py-4 hover:bg-gray-700"
      >
        View All Jobs
      </Link>
    </section>
  )
}

export default ViewAllJobs
