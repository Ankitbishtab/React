import Header from './header'
import Footer from './Foooter';
import Food from './Food';
import Card from './Card';
import Button from './Button/Button';
import Student from './Student';
import UserGreeting from './UserGreeting';
import ListItems from './ListItems';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Form from './Form'
import ColorPicker from './ColorPicker';
import MyComponent2 from './MyComponent2';
import Cars from './Cars';
function App() {
  const Fruits=[{id:1,name:"Apple",cal:22 },
            {id:2, name:"Banana", cal: 47}]
  return(
    <>
    <Cars></Cars>
    <MyComponent2></MyComponent2>
    <ColorPicker></ColorPicker>
    <Form></Form>
    <Counter></Counter>
    <MyComponent></MyComponent>
    {/* <ListItems item={Fruits}></ListItems> */}
    <UserGreeting isLoggedIn = {false} username = "A squad"></UserGreeting>
    <Student Name="A bob" age = {19} isStudent = {true}></Student>
    <Student Name="A pet" age = {21} isStudent = {false}></Student>
    <Student Name="A squid" age = {26} isStudent = {true}></Student>
    <Student Name="A sandy" age = {22} isStudent = {true}></Student>
    <Student></Student>

    <Button></Button>
    <Card></Card>
    <Card></Card>
    <Header></Header>
    <Footer></Footer>
    <Food></Food>
    </>
  );
}

export default App
