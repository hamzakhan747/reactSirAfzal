import React from 'react';
import Style from './style'
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
 
export default class MyComponent extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        return (
        <div className="container-fluid center">    
        <div className="CollapsibleComponent"> 
            <CollapsibleComponent className="">
                <CollapsibleHead className="additionalClassForHead"><h6>WHAT SORT OF DEBTS CAN YOU HELP WITH?</h6></CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                <div className="collapse-first">
                <p>The types of Debts that can be considered are:</p>
                    <div className="collapse-img">
                    <p>🏡 Council Tax arrears</p>
                    <p>💷 Loans and Payday Loans</p>
                    <p>💳 Credit cards</p>
                    <p>📑 Utility Bills</p>
                    <p>🔖 Catalogue Debts</p>
                    <p>✅ Almost any unsecured debt!</p>
                    </div>
                </div>
                </CollapsibleContent>
 
                <CollapsibleHead><h6>WHAT WILL MY MONTHLY PAYMENTS BE?</h6></CollapsibleHead>
                <CollapsibleContent>
                    <p className="mt-1">Your monthly payments should be reduced to one affordable amount that you can reasonably afford.</p>
                    <p>You will be guided by a professional who will help you become officially <span className="debt-inside-span"><b>Debt Free!</b></span></p>
                </CollapsibleContent>
 
                <CollapsibleHead><h6>HOW LONG DOES THE PROCESS TAKE?</h6></CollapsibleHead>
                <CollapsibleContent>
                <p className="mt-1">We can get to work on stopping any unreasonable creditors or bailiffs as soon as we have spoken to you.</p>
                    <p> Once we have the right information for you, we may be able to start the debt relief process within the<span className="debt-inside-span"><b> Same Day!</b></span></p>
                </CollapsibleContent>
            
            
   
  <CollapsibleHead><h6>WHY DO I NEED TO SPEAK TO SOMEONE? I PREFER TO DO IT ALL ONLINE.</h6></CollapsibleHead>
                <CollapsibleContent>
                <p className="mt-1">For us to help eliminate your debt, it is mandatory that we have a informal friendly chat on the phone. This is because what we do is life changing, and we will need to make sure you are given the right information for your personal circumstance.</p>
                <p>The conversations you have with us are <span  className="debt-inside-span"><b>never shared without your consent </b></span>. The only way someone would know, is if you choose to tell them yourself.</p>
                </CollapsibleContent>
            </CollapsibleComponent>
            
            
            </div>
            <Style/>
        </div>
        )
    }
 

}