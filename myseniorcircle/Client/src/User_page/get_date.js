import React from "react";
import { InputGroup } from "react-bootstrap";
function Get_date()
{
    const day=new Date().toLocaleString('en-us', {  weekday: 'long' }).substring(0,3);
    
}
export default Get_date;