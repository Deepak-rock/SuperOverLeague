const headingChild = 'Super Over Leaque'
const element = (
  <div className='bg-container'>
    <h1 className='heading'>{headingChild}</h1>
    <div className = 'image-con'>
      <img src='https://assets.ccbp.in/frontend/react-js/rcb-img.png' />
      <img src='https://assets.ccbp.in/frontend/react-js/csk-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
