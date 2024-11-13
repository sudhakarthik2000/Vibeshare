
import { Container } from "@chakra-ui/react"
import Feed from "./feedpost"

const Feedposts = () => {
 
  return (
  <Container maxW={"container.sm"} py={10}>
    <Feed   img = '/img1.png' username='Sheela_26' avatar='/img1.png' caption='MyLife_MyRules' />
    <Feed   img = '/breaking.jpg' username='Breaking_bad' avatar='/breaking.jpg' caption={""} />
    <Feed   img = '/shiva.jpg' username='Shiva__' avatar='/shiva.jpg' caption={""} />
    <Feed   img = '/vikings.jpg' username='Vikings_Rule' avatar='/vikings.jpg' caption={""} />
    <Feed   img = '/hanuman.jpg' username='Han_m`an' avatar='/hanuman.jpg' caption={""} />
    <Feed   img = '/anabale.jpg' username='Ana_.' avatar='/anabale.jpg' caption={""} />
    <Feed   img = '/vampire.jpg' username='Vampire_Dairies' avatar='/vampire.jpg' caption={""} />
    <Feed   img = '/con.jpg' username='Conjuring_78' avatar='/con.jpg' caption={""} />
    <Feed   img = '/peaky.jpg' username='Peaky_blend' avatar='/peaky.jpg' caption={""} />
    <Feed   img = '/got.jpg' username='Game_of_Thrones..' avatar='/got.jpg' caption={""} />
    <Feed   img = '/money.png' username='Money_heist..' avatar='/money.jpg' caption={""} />
    <Feed   img = '/stranger.jpeg' username='Stranger_things.-' avatar='/stranger.jpeg' caption={""} />
    <Feed   img = '/s1.jpg' username='My_World' avatar='/s1.jpg' caption={""} />
    <Feed   img = '/dark.jpg' username='Dark_88' avatar='/dark.jpg' caption={""} />
  </Container>
  );                                                                                                                                                                                                                                                                                                                                                                                                                          
}  

export default Feedposts

