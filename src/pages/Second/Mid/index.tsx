import React, {Component} from 'react';
import './index.scss'
import model from '../../../assets/imgs/model.png'
import fomodel from '../../../assets/imgs/fomodel.png'
import coremodel from '../../../assets/imgs/coremodel.png'
import img31 from '../../../assets/imgs/img31.png'
import img32 from '../../../assets/imgs/img32.png'
import img33 from '../../../assets/imgs/img33.png'
import img41 from '../../../assets/imgs/img41.png'
import img42 from '../../../assets/imgs/img42.png'
import img43 from '../../../assets/imgs/img43.png'
import img61 from '../../../assets/imgs/img61.png'
import img62 from '../../../assets/imgs/img62.png'
class Index extends Component {
    render() {
        return (
            <div className='secondMid'>
                <div className='midcontent'>
                    <div>第一章</div>
                    <div>1.软件危机的原因（不展开）P2</div>
                    <div>
                        ①用户需求不明确
                        ②缺乏正确的理论指导
                        ③软件规模越来越大
                        ④软件复杂度越来越高
                    </div>
                    <div>2.软件重用的优点（一句话，三点）P4</div>
                    <div>使用软件重用技术可以减少软件开发活动中大量的重复性工作，这样就能提高软件生产率，降低开发成本，缩短开发周期。</div>
                    <div>3.构件分类方法（不展开）P7</div>
                    <div>关键字分类法、刻面分类法、超文本组织方法</div>
                    <div>4.青鸟构件模型（图）P5</div>
                    <div><img width={'400px'} src={model} alt=""/></div>
                </div>
                <div className='midcontent'>
                    <div>第二章</div>
                    <div>1.软件体系结构模型（5种，展开）P29</div>
                    <div>结构模型、框架模型、动态模型、过程模型、功能模型</div>
                    <div>
                        结构模型：这是一个最直观、最普遍的建模方法。这种方法以体系结构的构件、连接件（connector）和其他概念来刻画结构，并力图通过结构来反映系统的重要语义内容，包括系统的配置、约束、隐含的假设条件、风格、性质等。研究结构模型的核心是体系结构描述语言。
                    </div>
                    <div>框架模型：框架模型与结构模型类似，但它不太侧重描述结构的细节而更侧重于整体的结构。框架模型主要以一些特殊的问题为目标建立只针对和适应该问题的结构。</div>
                    <div>动态模型：动态模型是对结构或框架模型的补充，研究系统的“大颗粒”的行为性质。例如，描述系统的重新配置或演化。动态可以指系统总体结构的配置、建立或拆除通信通道或计算的过程。这类系统常是激励型的。</div>
                    <div>过程模型：过程模型研究构造系统的步骤和过程，因而结构是遵循某些过程脚本的结果。</div>
                    <div>功能模型：功能模型认为体系结构是由一组功能构件按层次组成，下层向上层提供服务。它可以看作一种特殊的框架模型。</div>
                    <div>2.“4+1”模型中的“4”是哪4个视图，“1”是哪个视图（不展开）P29</div>
                    <div><img width={'350px'} src={fomodel} alt=""/></div>
                    <div>3.软件体系结构核心模型：基本元素和图（画图）P36</div>
                    <div>体系结构的核心模型由5种元素组成：构件、连接件、配置、端口、角色</div>
                    <div>构件、连接件和配置是最基本的元素</div>
                    <div><img width={'250px'} src={coremodel} alt=""/></div>
                </div>

                <div className='midcontent'>
                    <div>第三章</div>
                    <div>1.软件体系结构风格的定义（一句话）P50</div>
                    <div>软件体系结构风格是描述某一特定应用领域中系统组织方式的惯用模式</div>
                    <div>2.经典软件体系结构风格（每种风格中的连接件）</div>
                    <div>
                        管道过滤器风格——管道
                        数据抽象和面向对象组织风格——过程调用
                        基于事件的隐式调用风格
                        分层系统风格
                        仓库系统及知识库风格
                        C2风格
                    </div>
                    <div>3.与C/S体系结构相比，B/S体系结构的不足之处P67</div>
                    <div>
                        ①B/S体系结构缺乏对动态页面的支持能力，没有集成有效的数据库处理能力
                        ②B/S体系结构的系统扩展能力差，安全性难以控制
                        ③采用B/S体系结构的应用系统，在数据查询等响应速度上，要远远低于C/S体系结构
                        ④B/S体系结构的数据提交一般以页面为单位，数据的动态交互性不强，不利于在线事务处理应用
                    </div>
                    <div>4.SIS系统P87</div>
                    <div>SIS是指系统可以分成若干个不同的部分，每个部分作为单独的系统独立开发。整个系统通过一组互连系统实现，而互连系统之间相互通信，履行系统的职责。其中一个系统体现整体性能，称为上级系统；其余系统代表整体的一个部分，称为从属系统。</div>
                    <div>5.层次系统最广泛的应用P53</div>
                    <div>分层通信协议</div>
                    <div>6.黑板系统由三部分组成（不展开）P54</div>
                    <div>
                        ①知识源
                        ②黑板数据结构
                        ③控制
                    </div>
                    <div>7.基于事件的系统——隐式调用P53</div>
                    <div>该风格也称为隐式调用</div>
                    <div>8.已知一个图，写出属于哪种软件体系结构风格（有序批处理、C2、管道与过滤器）</div>
                    <div>
                        管道与过滤器
                        <img width='400px' src={img31} alt=""/>
                    </div>
                    <div>
                        C2
                        <img width='400px' src={img32} alt=""/>
                    </div>
                    <div>9.DSSA的三层次的系统模型（图）P96</div>
                    <div><img width='400px' src={img33} alt=""/></div>
                </div>
                <div className='midcontent'>
                    <div>第四章</div>
                    <div>1.ADL与其他语言的区别P107</div>
                    <div>ADL与需求语言的区别在于后者描述的是问题空间，而前者则扎根于解空间中。ADL与建模语言的区别在于后者对整体行为的关注度要大于对部分的关注，而ADL集中在构件的表示上。ADL与传统的程序设计语言的构成元素既有许多相同和相似之处，又各自有着很大的不同。</div>
                    <div>2.模块内连接语言定义（一句话）P104</div>
                    <div>采用将一种或几种传统程序设计语言的模块连接起来的模块内连接语言（MIL）</div>
                    <div>3.C2语言（基本特征）P113</div>
                    <div>
                        C2和其提供的设计环境（Argo）支持采用基于时间的风格来描述用户界面系统，并支持使用可替换、可重用的构件开发GUI的体系结构。
                        其工作的重点在于对构件的重用，以及对运行时体系结构的动态改变以使系统满足某些GUI体系结构方面的特性。
                        在C2中，连接件负责构件之间消息的传递，而构件维持状态、执行操作并通过两个名字分别为“top”和“bottom”的端口和其他的构件交换信息。
                        每个接口包含一种可发送的消息和一组可接收的消息。构件之间的消息要么是请求其它构件执行某个操作的请求消息，要么是通知其他构件自身执行了某个操作或状态发生改变的通知消息。
                        构件之间的消息交换不能直接进行，而只能通过连接件来完成。每个构件接口最多只能和一个连接件相连。而连接件可以和任意数目的构件或连接件相连。
                        请求消息只能向上层传送而通知消息只能向下层传送。
                        C2要求通知消息的传递只对应于软构件内部的操作，而和接收消息的构件的需求无关。这种对通知消息的约束保证了底层独立性，即可以在包含不同的底层构件（比如，不同的窗口系统）的体系结构中重用C2构件。
                        C2对构件和连接件的实现语言、实现构件的线程控制、构建的部署以及连接件使用的通信协议等都不加限制。
                    </div>
                    <div>4.已知一个图，写出属于UML中的什么图。（类图，用例图，序列图）</div>
                    <div>
                        用例图
                        <img width='400px' src={img41} alt=""/>
                    </div>
                    <div>
                        类图
                        <img width='400px' src={img42} alt=""/>
                    </div>
                    <div>
                        序列图
                        <img width='400px' src={img43} alt=""/>
                    </div>
                </div>
                <div className='midcontent'>
                    <div>第五章</div>
                    <div>1.CBDSAM模型的局部更新和全局更新（每种更新的五个步骤）P181</div>
                    <div>局部更新</div>
                    <div>
                        第一步，更新发起者发出一个更新请求，这个请求被送到构建A的配置器中，构建配置器将分析更新的类型，从而判断它是对象的局部更新。
                        第二步，由于更新为局部更新，构建A的配置器发出一个信号给连接件以隔离构建A的通信，准备执行更新。
                        第三步，构建A的配置器开始执行更新。
                        第四步，更新执行完毕后，构建A的构件描述被更新，并且构件A发送一个消息给连接件B，两者间的连接被重新存储起来。
                        第五步，将更新结果返回给更新发起者。
                    </div>
                    <div>全局更新</div>
                    <div>
                        第一步，Server构件配置器接收到更新发起者提出的更新请求后，向体系结构配置器提出更新请求。
                        第二步，体系结构配置器对更新请求的类型进行分析，判断是否在更新请求限制（属于全局更新还是局部更新）范围内，不在更新范围内的更新不予执行；如果在更新限制范围内，体系结构配置器对更新所涉及的连接件和构件（本例中为Client构件和连接件）发出消息，要求它们做好更新准备工作。
                        第三步，准备工作完成后，Client构建配置器和连接件向体系结构配置器返回就绪信息。
                        第四步，一切准备就绪后，体系结构配置器通知Server构件进行更新。
                        第五步，更新执行完毕后，向Server构件配置器、体系结构配置器和更新发起者通知更新执行完毕并返回更新结果；同时，体系结构配置器通知Client构件和连接件更新结束，可继续正常运行。
                    </div>
                    <div>第六章</div>
                    <div>1.Web Service模型（三个角色——展开，三个操作——展开，图）</div>
                    <div><img width='300px' src={img61} alt=""/></div>
                    <div>
                        服务提供者：提供服务并进行注册，以使服务可用。<br/>
                        服务代理：起中介作用，它是服务的注册场所，充当服务提供者和服务请求者之间的媒介。<br/>
                        服务请求：在应用过程中通过向服务代理请求服务，调用所需服务。<br/>
                        发布：服务提供者向服务代理发布所提供的服务。服务提供者可以决定去发布（注册）或不发布（移去）服务。<br/>
                        发现：服务请求者向服务代理发出服务查询请求，服务代理接收该请求。<br/>
                        绑定：服务的具体实现。分析从注册服务器中得到的调用该服务所需的详细绑定信息，根据这些信息服务请求者就可以编程实现对服务的远程调用。
                    </div>
                    <div>2.SOA关键技术服务栈P201</div>
                    <div><img width='300px' src={img62} alt=""/></div>
                    <div>3.SOAP是什么意思，它包括四个部分（不展开）P219</div>
                    <div>
                        SOAP——简单对象访问协议
                        SOAP以XML形式提供一个简单、轻量的用于在分散或分布环境中交换结构化和类型信息的机制。
                        四个部分：
                        1)SOAP封装结构
                        2)SOAP编码规则
                        3)SOAP RPC表示
                        4)SOAP绑定
                    </div>

                </div>
                <div className='midcontent'>
                    <div>英文缩写</div>
                    <div>
                        1)UML &nbsp;&nbsp;&nbsp; Unified Modeling Language统一建模语言（P22）<br/>
                        2)XSL &nbsp;&nbsp;&nbsp; eXtensible Style Language可扩展样式语言（P155）
                        3)CBDSAM &nbsp;&nbsp;&nbsp; Component Based Dynamic System Architecture Model基于构件的动态系统结构模型（P179）<br/>
                        4)UDDI &nbsp;&nbsp;&nbsp; Universal Description,Discovery and Integration统一描述、发现和集成协议<br/>
                        5)WSDL &nbsp;&nbsp;&nbsp; Web Service Description Language Web服务描述语言<br/>
                        6)CSP &nbsp;&nbsp;&nbsp; Comunicating Sequential Processes顺序通信进程<br/>
                        7)DSSA &nbsp;&nbsp;&nbsp; Domain Specific Software Architecture特定领域软件体系结构（P92）<br/>
                        8)HMB &nbsp;&nbsp;&nbsp; Hierarchy Message Bus层次消息总线（P77）<br/>
                        9)PCL &nbsp;&nbsp;&nbsp; Proteus Configuration Language多变配置语言（P105）<br/>
                        10)SOA &nbsp;&nbsp;&nbsp; Service-Oriented Architecture基于服务的体系结构（P197）<br/>
                        11)OMG &nbsp;&nbsp;&nbsp; Object Management Group对象管理组织（P4）<br/>
                        12)CORBA &nbsp;&nbsp;&nbsp; Common Object Request Broker Architecture通用对象请求代理结构（P4）<br/>
                        13)API &nbsp;&nbsp;&nbsp; Application Programming Interface应用编程接口（P15）<br/>
                        14)OOD &nbsp;&nbsp;&nbsp; Object-Oriented Design面向对象的设计<br/>
                        15)OLTP &nbsp;&nbsp;&nbsp; Online Transaction Processing在线事务处理<br/>
                        16)SIS &nbsp;&nbsp;&nbsp; System of Interconnected Systems互连系统构成的系统（P87）<br/>
                        17)UML &nbsp;&nbsp;&nbsp; Unified Modeling Language统一建模语言<br/>
                        18)XLL &nbsp;&nbsp;&nbsp; eXtensible Linking Language可扩展链接语言（P155）<br/>
                        19)SOAD &nbsp;&nbsp;&nbsp; Service-Oriented Analysis and Design面向服务的分析与设计（P200）<br/>
                        20)DSA &nbsp;&nbsp;&nbsp; Dynamic Software Architecture动态软件体系结构<br/>
                        21）ADL &nbsp;&nbsp;&nbsp; Architecture Description Language体系结构描述语言<br/>
                        22）XML &nbsp;&nbsp;&nbsp; eXtensible Markup Language可扩展标记语言
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;