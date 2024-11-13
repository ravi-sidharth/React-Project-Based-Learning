import React from 'react' 
import styles from './appStyles.module.css'

const heading = {
    fontSize:'72px',
    color:'blue'

}
function Inline() {
  return (
    <div>
      <h1 className={styles.success}>Success</h1>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
