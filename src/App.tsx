import './App.css'
import {useState} from 'react'
import HighlightedText from './components/HighlightedText'

function App() {
  const [prefrences, setPrefrences] = useState({
    endOfWordTextColor: '',
    emphasisedTextColor: '',
    color: '',
    fontSize: '',
    fontWeight: '',
    lineHeight: '',
    letterSpacing: ''
  })

  return (
		<>
			<HighlightedText />
		</>
	);
}

export default App
