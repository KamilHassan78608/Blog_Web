import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Clock } from 'lucide-react'
import Hero from '../components/Hero';

const Home = () => {

  const { darkMode } = useContext(AppContext);

  return (
    <div>

      <Hero />
    </div>
  )
}

export default Home
