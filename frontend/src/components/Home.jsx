import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import CategoryCarousel from './CategoryCaraousel'
import Footer from './shared/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useGetAllJobs from '@/hooks/useGetAllJobs'

function Home() {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer/>
    </div>
  )
}

export default Home