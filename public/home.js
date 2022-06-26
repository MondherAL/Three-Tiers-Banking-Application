function Home(){
  return (
    <Card
      txtcolor="black"
      header="Welcome To MIT Banking Application"
      width="20rem"
      body={
            
        <div className="landing">
        <img src="bank.png" className="img-fluid" alt="Responsive image"/>
        <div className="align-right">
            <h4><em>"No Security Deposit"</em></h4>
            <h5 className="pushed">You can Join today and receive:</h5>
            <ul>
                <li className="extra-pushed">New Account Bonus!</li>
                <li className="extra-pushed">No Additional Fees!</li>
                <li className="extra-pushed"> Secured Personal Information!</li>
            </ul>
        </div>
        </div>
        
        
        } 
    />    
  );  
}
