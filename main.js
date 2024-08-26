
function App() {
   
    return (
        <div style={{
            backgroundColor:'#23272F',
            color: 'white',
            padding: '20px 20px'
        }}>
            <h1>lab02</h1>
            <h1>Quick Start</h1>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto odit asperiores dignissimos cumque omnis repellendus similique ullam reiciendis numquam labore?</h3>
            <div style={{
              
                borderRadius : '20px',
                backgroundColor : '#343A46',
                padding : '20px 20px',

            }}>
                <h1>You will learn</h1>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)