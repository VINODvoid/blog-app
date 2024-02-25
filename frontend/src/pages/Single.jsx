import React from 'react'
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EOst2kFt1z7-F5mav9Fo3gHaEK%26pid%3DApi&f=1&ipt=b1c70f17aeac8ae3f5e1dda122ad05ea73882d8e1233c10d9202984df8824600&ipo=images" alt="" />
        <div className='user'>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2i5UaEHaQM3PYAYXQyM1AAAAAA%26pid%3DApi&f=1&ipt=31d9937379cd15fa23760fd1374b898389e7dbc8a5d5550c5677a0b492118c8a&ipo=images" alt="" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 Days Ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis quia quaerat voluptate inventore facilis incidunt suscipit exercitationem dolorem, dolorum animi sunt quas nostrum repellat? Minima exercitationem ullam ducimus ad? Officia aliquid fuga et cupiditate nam iusto, vitae molestiae explicabo numquam exercitationem fugiat animi sint qui, error eveniet doloribus quisquam voluptate eaque sapiente dolor ipsam eum! Illum beatae dolorem minus debitis quia at sit aliquam, quasi, nulla neque suscipit corporis ratione! Modi soluta quos cupiditate atque fugit voluptatum aut, sapiente quasi natus voluptates dolorem recusandae eligendi quisquam eaque similique autem necessitatibus sed expedita nihil suscipit ratione alias impedit? Laborum pariatur dolorum minima officia! Quibusdam minima dignissimos voluptatibus quod assumenda tempora natus nulla accusantium quidem sunt, ipsum quisquam possimus cupiditate placeat vel, praesentium nobis! Eaque eos voluptates ea, labore ad doloremque? Natus, doloremque fugiat. Saepe quia praesentium, placeat, fuga numquam provident fugiat distinctio accusamus totam eligendi dolores eius hic ab maiores delectus illo, culpa iusto qui temporibus earum ipsum. Culpa aspernatur doloremque commodi earum sit, rem asperiores enim aut voluptas sapiente cum nihil nisi alias quis est, odio iste temporibus, ut saepe ullam atque pariatur non beatae vel. Eligendi possimus numquam, libero, quidem tenetur minima fugiat optio cum explicabo adipisci, earum necessitatibus! Placeat, maiores facere esse consectetur voluptas quo explicabo doloremque dolor ad. Voluptatibus ad consequuntur eveniet eaque labore, magnam alias nulla voluptas provident numquam harum exercitationem cum dignissimos quaerat itaque, ea et, doloremque fugit facere impedit. Magni id labore, voluptas error quisquam libero maiores cumque dicta mollitia officia quaerat hic nam possimus inventore officiis fugiat eligendi minima dolor. Possimus, beatae. Quaerat, corporis ratione voluptatum sequi ipsum omnis eaque vel aut quidem nihil. Minus, veniam dolorum? Qui, saepe? Iusto, quam eaque distinctio dignissimos et adipisci quidem minima ipsa vitae dicta eligendi laudantium veritatis qui quo magnam nemo ullam? Eum, cum exercitationem? Ipsum ex ullam sint optio aperiam, tenetur odio numquam non necessitatibus, cumque impedit deleniti suscipit fuga adipisci quam eveniet temporibus incidunt ut distinctio, quod dignissimos porro rerum aspernatur minima! Quia, fuga cupiditate eveniet quibusdam saepe perspiciatis minus veniam excepturi quas illo sed distinctio cumque aperiam delectus nemo voluptates doloribus. Beatae natus sint aliquam, fuga vel quasi praesentium neque molestias. Quos aperiam, placeat, ab dolor ullam necessitatibus libero iure earum quis rerum explicabo excepturi odit. Vero eius sint voluptates! Dolor accusantium quisquam quaerat? Et delectus harum ipsam consectetur tenetur porro, amet iusto aspernatur distinctio nam doloribus dicta aliquid quod vitae incidunt?</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single