var store = [{
        "title": "Lhasa Apso",
        "excerpt":"The Lhasa Apso (/ˈlɑːsə ˈæpsoʊ/ lah-sə ap-soh) is a non-sporting dog breed originating in Tibet. It was bred as an interior sentinel in the Buddhist monasteries, to alert the monks to any intruders who entered. Lhasa is the capital city of Tibet, and apso is a word in the Tibetan...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/pets/lhasa-apso/",
        "teaser": null
      },{
        "title": "Tabby",
        "excerpt":"A tabby is any domestic cat that has a coat featuring distinctive stripes, dots, lines or swirling patterns, usually together with a mark resembling an ‘M’ on its forehead. Tabbies are sometimes erroneously assumed to be a cat breed. In fact, the tabby pattern is found in many breeds, as...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/pets/tabby/",
        "teaser": null
      },{
        "title": "Baz Boom Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/baz-boom-identity/",
        "teaser": "http://localhost:4000/assets/images/unsplash-gallery-image-1-th.jpg"
      },{
        "title": "Fizz Bang Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/fizz-bang-identity/",
        "teaser": "http://localhost:4000/assets/images/unsplash-gallery-image-2-th.jpg"
      },{
        "title": "Foo Bar Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/foo-bar-website/",
        "teaser": "http://localhost:4000/assets/images/foo-bar-identity-th.jpg"
      },{
        "title": "Ginger Gulp Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/portfolio/ginger-gulp-identity/",
        "teaser": "http://localhost:4000/assets/images/unsplash-gallery-image-3-th.jpg"
      },{
        "title": "Optical flow",
        "excerpt":"Hight Accuracy Optical Flow Estimation Based on a Theory for Warping_ reading notes 作者采用了一个能量方程计算光流，这个方程基于三个假设：亮度恒定，梯度恒定，时空平滑约束( a discontinuity-preserving spatio-temporal smoothness constraint). Introduction 光流法是估计两张图片像素之间的位移范围，可以应用在获取像素之间的对应关系的情景。在过去的研究中，很多新的方法被提出，解决了之前的模型的一些缺点。比如，为了解决光流场中的不连续性，平滑约束替代了二次正则化。由粗到精(coarse to fine)的策略和非线性模型的方法可以用来解决大的位移。时空结合的方法用一个额外维度的信息改善了最终的结果。 在本文中，作者整合了之前的一些概念，并且提出一个能用数学方法最小化的能量方程。它使用了非线性的光流约束条件，并且提出了一个多分辨率的方法解决像素对应问题。另外，还使用了梯度恒定约束扩展灰度恒定约束，提升了对灰度变化的鲁棒性。 The Variational Model 作者对能量方程中基于的假设进行了介绍。 灰度恒定假设(grey value constancy assumption) 从光流估计开始，像素的灰度值不会随着位移的变化而变化 线性化后的灰度恒定约束是(推导参考wiki) 由于线性化的约束只存在与图像沿着位移方向线性变化，并不符合事实，所以作者采用最原始的，即公式(1)，非线性的灰度恒定约束。 梯度恒定假设(Gradient constancy assumption) 灰度恒定假设不能适应亮度有轻微变化的场景，但是这种情况在自然界是非常常见的。因此，梯度作为一种不随着位移和线性光照的变化的量可以对这种场景有着较好的适应性。 表示空间上的梯度。 平滑假设(smoothness assumption) 到目前为止，用来估计像素位移的模型只考虑了单个像素，并没有考虑像素的邻域。因此在一些梯度消失的场景（比如朝向镜头移动的物体的边界处的外部，由于受到遮挡会消失掉，或者因为单个物体平移而覆盖了场景中一些其它的物体）和沿着光轴方向移动的物体的位移(aperture problem)。因此，通过对光流场像素平滑（pixelwise smooth）来满足平滑假设。 多尺度方法（Multiscale approach） 当位移大于一个像素的时候，能量函数最小化很容易陷入一个局部最优解。为了达到一个全局最优，多尺度的方法比较有效。通过对原始图像进行降采样，然后在采样后的图像上寻找最优，此时得到一个比较粗略的解，然后把它作为初值，代入到优化的步骤中，得到精化后的最优解。 假设和。 考虑灰度恒定约束和梯度恒定约束的能量方程为：...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/optical-flow/",
        "teaser": null
      },{
        "title": "Hmm1",
        "excerpt":"    Hidden Markov Model(隐马尔可夫模型)(一)   1. 基本概念 隐藏的马尔可夫链根据时间的变化生成的状态的序列称为状态序列（state sequence),根据这些状态实际观察到的序列为观测序列(observation sequence)  所有可能的状态集合 所有可能的观测集合 长度为T的状态序列及对应的观测序列: 状态转移概率矩阵  其中表示在时刻处于状态的条件下在时刻转移到的概率。 观测概率矩阵  其中, 表示在时刻处于状态的条件下生成观测的概率。是初始概率向量  其中,是时刻处于状态的概率。隐马尔可夫模型可以表示为：  和决定状态序列,决定观测序列 隐马尔可夫模型基于两个假设： 隐藏的马尔可夫链在任意时刻t的状态只与前一时刻的状态有关,与其它时刻的状态和观测无关。任意时刻的观测只和当前时刻的状态有关,与其它时刻的状态及观测无关。2. 例子 下面通过一个例子来介绍一下隐马尔可夫模型的参数。 假设有三个盒子，分别编号box1,box2,box3，盒子里面分别有白球和红球。 则所有的状态集合所有的观测集合为白球红球现在从三个盒子中按照box1,box3,box2的次序依次拿一个球，拿出来的结果为：红，白，白。此时， 状态序列观测序列红，白，白假设从box1取完球，再到box2取球的概率为，并以此类推，则状态转移概率矩阵为 假设在box1中摸到白球的概率为白，摸到红球的概率为红,以此类推。则观测概率矩阵为 白白白红红红假如第一次去box1取球的概率为，第一次去box2取球的概率为，第一次去box3取球的概率为，那么初始概率向量可以表示为： &nbsp;   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/HMM1/",
        "teaser": null
      },{
        "title": "Nonlocal_means",
        "excerpt":"    Non-Local Means   1. Definition 局部均值(local means):就是常用的在像素周围开一个窗口，求窗口中像素灰度的平均值，此时权重都为1，常用到的卷积核为：   非局部均值(Non-local Means):非局部代表使用全局的图片，按照某种相似度的方式进行加权取平均。滤波后图像清晰度高，而且不丢失细节。 2. Method description (1)以像点A(x,y)为中心，取[x-d:x+d,y-d:y+d]大小的窗口为搜索区域。另外，以A为中心，取半径为r的[x-r:x+r,y-r:y+r]窗口为邻域窗口，命名为窗口X，其中r&lt; d。  (2)从搜索窗口的左上角开始构建一个同样以r为半径的邻域窗口，假设为窗口Y，对窗口Y与窗口X的相应位置求差的平方和，作为相似度。   Z(x)为规范化因子  (3)以相似度为权，乘以邻域窗口Y，然后移动窗口Y重复步骤(2)，以一种类似加权求平均的方式求得最终的区域X中心的像素灰度值。  Reference https://blog.csdn.net/u010839382/article/details/48229579   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Nonlocal_Means/",
        "teaser": null
      },{
        "title": "K L divergence",
        "excerpt":"    K-L Divergence   Definition 在介绍K-L散度之前，首先了解一下信息论以及相关的一些定义。 信息论中的基本想法是一个发生概率很低的事件发生了比起一件经常发生的事件发生带来的信息量更多。用一个例子来说明：“今天太阳从东边升起”中的信息量没有“今天发生了日食”的信息量大。从“今天发生日食”这句话中我们能够推断出来更多的信息，比如：日月地球在同一条线上。  用一种数学的方式来表达这种信息量就是： 自信息:如对事件X=x的自信息:自信息通常是指对于一个事件的输出，也就是一个事件所蕴含的信息。 香农熵:针对一个概率分布中的不确定总量(信息量)进行量化。换句话说就是：一个分布的香农熵是指遵循这个分布的事件所产生的期望信息总量。 KL散度:如果对于随机变量X有两个单独的概率分布P(x)和Q(x)，KL散度可以用来衡量这两个分布的差异，如P分布对Q分布的KL散度： 从信息传递方面解释KL散度是指：当我们使用一种被设计成能够使概率分布Q产生的消息的长度最小的编码时，用这个编码来传递包含概率分布P产生的符号的信息时，所需要的额外的信息量。 Properties 非负性 KL散度是非负的。当时，代表P和Q的分布完全相同。 非对称性 KL散度和距离不同之处在于KL散度不是对称的，如和不一样。从我的理解上说一个是用Q来逼近P，一个是用P来逼近Q，在当两个分布不一样的时候，逼近时采用的策略也不一样。详情可以参看下图。   Reference Books: Deep learning &nbsp; &nbsp;   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/K-L-Divergence/",
        "teaser": null
      },{
        "title": "Crf1",
        "excerpt":"    Conditional Random Field(条件随机场)   1. 基本概念 条件随机场（crf）：是给定一组输入随机变量条件下，另一组输出随机变量的条件概率的分布模型. 线性链条件随机场：定义在线性链上的特殊的条件随机场（输出变量只与有关）用数学式子表达就是P(Y|X)，在标注过程中，Y是输出变量，表示标记序列，X是输入变量，表示需要标记的观测序列。比如在自然语言处理中，X是句子（词向量），Y则是对应的词性标注（名词、动词、形容词）  条件随机场应用过程：应用过程分为两个步骤。 学习：在训练数据上通过极大似然估计得到一个最符合的条件概率模型预测：利用训练好的条件概率模型，输入序列X，获得概率最大的2. CRF的表示 线性链条件随机场的参数化形式为：   其中，和是特征函数，表示转移特征(transition function)，表示状态特征函数，通常两个函数取值为1或者0. Z(x)为规范化因子(normalization factor)，相当于对所有输出的统计，使得最终结果在1以内。为权重，是将来学习的参数。 这个式子可以用在这个例子中：在一个标注问题中，输入观测序列为，输出序列为，取值为{1,2}，现在给相应的特征函数和以及对应的权值，求对于给定的观测序列x,输出标记序列为y=(1,2,2)的概率。(具体问题请参考李航 统计学习方法) 3. 条件随机场的学习算法 3.1 改进的迭代尺度算法(IIS) IIS的想法是：假设最大熵模型当前的参数向量是，希望找到一个新的参数向量w+使得模型的对数似然值增大，然后不断循环这个过程直到小于某个阈值，可以认为现在w达到了最理想的值。 3.2 拟牛顿法  4. 条件随机场的预测算法 条件随机场的预测问题是给定条件随机场P(Y|X)和输入序列x，求条件概率最大的输出序列y。 常用的算法为viterbi算法。(原理与dijestela最短路径算法相似)  预测算法的目标可以表达成y=argmax(P(y|x))等效于argmax(w*F(y,x)) 算法步骤： 初始化：从第一个预测序列开始，求w*F(y,x)。 递推，依次求出剩余的预测序列的最大概率以及最大概率所对应路径。 递推直到结束，获取对应的最大概率以及路径。 从后往前一步一步返回最优路径  最终的最优路径是Reference： https://www.cnblogs.com/pinking/p/9194865.html https://blog.csdn.net/wkebj/article/details/77965714 李航《统计学习方法》 &nbsp;   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/CRF1/",
        "teaser": null
      },{
        "title": "Paddlepaddle install",
        "excerpt":"    windows7+Pycharm+Docker+paddlepaddle配置   因为paddlepaddle只支持windows的docker下的配置，但是docker下的编程不是很方便，考虑到pycharm支持远程python编辑器，所以考虑使用pycharm结合docker进行windows下的paddlepaddle环境搭建。  docker配置 首先下载docker，安装的时候一定要记得安装virtuoBox，然后按照官方的教程pull下来paddlepaddle的docker image。 然后打开virtuoBox。  点击共享文件夹。  上面的路径是我分配过的，想要设置自己的同步文件路径可以点击右上角的符号，比如这样设置：  代表把windows本机的文件夹E：\\doc和docker中的doc文件夹进行同步。 在确定之后启动虚拟机  使用ls命令可以看到我之前添加的pypaddle文件夹  这个文件夹是对应我的windows电脑的F:/java/pypaddle。 接下来运行镜像（我要在pypaddle文件夹中用pycharm写程序，所以我把pypaddle文件夹与paddlepaddle镜像中进行文件同步，同步文件夹为/opt/program） 使用如下命令： docker run -it -v pypaddle:/opt/program hub.baidubce.com/paddlepaddle/paddle /bin/bash  进入相应的文件夹下，可以看到   此时，文件同步已经完成。 pycharm配置 Pycharm一定要用professional版本的才行。具体应该如何下载请自行百度。 在pycharm中，打开一个工程，进入settings。  右边设置处点击出现add，进入。  点击new  修改下面的path，其中virtuo machine path指的是虚拟机的path，localpath是指本机的path  在我的工程中，我按照F:/program/java/pypaddle映射到opt/program的方式设置之后如下  设置完成之后点击确定，需要等待一段时间。 等到程序运行结束之后，就可以在pycharm中写paddlepaddle的代码了。 PS 但是有一个问题没有解决，程序的运行需要在virtuobox的命令行运行。  不能直接在pycharm中运行，会报错。 我现在还不知道怎么解决这个问题，如果哪位朋友知道，欢迎分享。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/paddlepaddle-install/",
        "teaser": null
      },{
        "title": "Xv6 system(chapter 0 1 first process)",
        "excerpt":"XV6 SYSTEM(Chapter 0-1 first process) I/O and File descriptors A file descriptor is a integer to represent the index of a file. 3 status: 0 (standard input), 1 (standard output), 2 (standard error). These status are used to refer to a console, a file or a pipe.1. fork() create a...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/XV6-SYSTEM(Chapter-0-1-first-process)/",
        "teaser": null
      },{
        "title": "C++ optimization",
        "excerpt":"C++ optimization Simplify Expressions Use less multification/division and more plus/minus. For example,1y=a*x*x*x+b*x*x+c*x+d;//6 multification2// ==&gt;3y=((a*x+b)*x+c)*x+d; //3 multificationUse more int instead of float Group Constants Together Always group constant expressions together with parentheses, or put them on the left side of the expression. Use a const variable or put them in a...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/C++-optimization/",
        "teaser": null
      },{
        "title": "Ensemble learning",
        "excerpt":"    Ensemble learning(集成学习)   集成学习 集成学习通常是构建并结合多个分类器来完成学习任务。 目前的集成学习方法大致分为两类： 个体学习器问存在强依赖关系、必须串行生成的序列化方法，代表有Boosting个体学习器间不存在强依赖关系、可同时生成的并行化方法 ，代表有Bagging和Random Forest 1 装袋(bagging) 装袋是一种投票的方法，是通过在一个较大的数据集中进行有放回的抽样，形成多个具有一定重复但是不完全重复的数据集，然后再这些小数据集上面进行训练基学习器 。 当需要对一个数据集进行预测的时候，可以使用以上训练的基分类器分别进行预测，然后基于分类器预测的结果进行投票决定最终的结果。类似于“少数服从多数”的原则。也有其他的方式来确定最终的预测结果，比如基于每一个分类器在训练集上的错误率 的倒数作为每个分类器的权重:  2 提升(boosting) 装袋中，产生互补的基学习器是靠运气以及学习方法的不稳定性。在提升中，通过在前一个学习器所犯的错误上训练下一个学习器，逐步尝试产生互补的学习器。 这种方法不需要每一个分类器十分强，即分类效果十分好，只要达到在正确率大于即可，通过组合多个弱分类器，最终经过投票等策略，得到一个强分类器，获得较好的实验效果。 2.1 adaboost 由于boosting的方法需要多个分类器，并且后续的分类器都是基于前一个分类器的错误的数据集进行训练，所以在最开始需要一个很大的数据集。为了解决这个问题，学者在1996年提出一种新的boosting变种:  Adaboost 。这种方式是基于同一个数据集，然后可以训练多个分类器。 Adaboost主要是通过根据前一个分类器的结果，更新训练集中每一个训练样本被下一个分类器选中进行训练的概率，从而构建新的训练集，然后训练具有一定互补能力的基分类器。 完成训练之后，Adaboost就采用投票的方法，给定一个实例，所有的基分类器 决定其分类，而后取一个加权的分类结果，其中权重与基分类器在训练集上的准确率成正比。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/ensemble-learning/",
        "teaser": null
      },{
        "title": "Java Web video communication software developing tutorial (1)",
        "excerpt":"    Java-web video communication software developing tutorial (1)   Java-web video communication software developing tutorial (1) 本教程旨在利用JAVA开发一个在线视频通讯软件，并通过该过程学习java网络通信相关的知识。本系列从零开始，展示如何从网络寻找资源进行学习开发的过程。文章中很多部分来自于参考资源，想要了解更多，请参考对应的引用。  Start 有一个非常出名的开源软件，WebRTC. 它具备了很多功能，并且代码在github上开源，但是它十分复杂，作为入门的参考项目很困难。经过google和baidu的重重筛选，最终从github上找到一个很简单的在线视频项目，WebRTCSimple。该项目只有两个java文件，其中综合了WebSocket的知识，十分适合上手。本教程从该项目出发。 WebRTCSimple 该应用基于JAVA-Web，使用了Tomcat服务器，实现了局域网内的在线视频聊天功能。含有一个界面，类似于聊天室的样子。  项目使用的技术主要有servlet和websocket。对于servlet相关的内容不再讲述，主要介绍一下websocket。 WebSocket WebSocket与Http一样[1]，是一种网络通信协议。它与HTTP协议的不同在于，HTTP协议只能从客户端发起，而WebSocket可以从服务器端发起。由此可以想到类似于手机上的APP的消息推送。这种服务器和客户端互相发送消息的方式，可以更加节约资源。 比如使用HTTP协议的时候，如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用&quot;轮询&quot;：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）。而使用了WebSocket之后，服务端有更新会通知客户端更新，节省了资源。 一个图可以说明HTTP和WebSocket的区别。具体可参考[1]  有一篇教程[2]，关于如何搭建一个WebSocket应用，可以很好理解WebSocket。 关于WebSocket详细内容，参考[1]，此处不再赘述。 Reference [1] https://www.ruanyifeng.com/blog/2017/05/websocket.html  [2]  https://how2j.cn/k/websocket/websocket-develop/1628.html#nowhere    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Java-web-video-communication-software-developing-tutorial-(1)/",
        "teaser": null
      },{
        "title": "Useful Tensorflow 2.x Code Segments",
        "excerpt":"Useful TensorFlow 2.x code segments Useful TensorFlow 2.x code segments learning rate warm up 1args.start_lr=1e-62args.learning_rate=5e-53def myschedule(step,args,base_lr):4 &nbsp; &nbsp;if step &lt;= 500:5 &nbsp; &nbsp; &nbsp; &nbsp;base_lr=args.start_lr+(args.learning_rate-args.start_lr)*step/float(500)6 &nbsp; &nbsp;else:7 &nbsp; &nbsp; &nbsp; &nbsp;if (step + 1) % (0.6 * args.iter_max) == 0:8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;base_lr = base_lr / 59...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Useful-TensorFlow-2.x-code-segments/",
        "teaser": null
      },{
        "title": "Setup Challenge",
        "excerpt":"setup 1. Install orb-slam2 create catkin directory 1mkdir -p ~/catkin_orb/src2cd ~/catkin_orb3catkin_make4echo \"source ~/catkin_orb/devel/setup.bash\" &gt;&gt; ~/.bashrcdownload orb-slam2 xxxxxxxxxx21cd ~/catkin_orb/src2git clone https://github.com/appliedAI-Initiative/orb_slam_2_ros.gitinstall dependence xxxxxxxxxx11sudo apt install libeigen3-devsetup ros xxxxxxxxxx51cd ~/catkin_orb2sudo rosdep init3rosdep update4rosdep install --from-paths src --ignore-src -r -y5catkin_make2. Launch environment xxxxxxxxxx11roslaunch city_sim_gazebo main.launchTo move 4 wheel robot xxxxxxxxxx11rosrun teleop_twist_keyboard teleop_twist_keyboard.py cmd_vel:=/cmd_vel&nbsp;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/setup-challenge/",
        "teaser": null
      },{
        "title": "How To Install Opensfm(ubuntu 18.04)",
        "excerpt":"How to install opensfm(ubuntu 18.04) How to install opensfm(ubuntu 18.04) install dependences using apt install xxxxxxxxxx11sudo apt-get install build-essential cmake libatlas-base-dev libatlas-base-dev libgoogle-glog-dev libopencv-dev libsuitesparse-dev python3-pip python3-dev python3-numpy python3-opencv python3-pyproj python3-scipy python3-yaml libeigen3-devinstall ceres xxxxxxxxxx81mkdir -p /source2cd /source 3curl -L http://ceres-solver.org/ceres-solver-1.14.0.tar.gz | tar xz 4cd /source/ceres-solver-1.14.0 5mkdir -p build &amp;&amp;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/How-to-install-opensfm(ubuntu-18.04)/",
        "teaser": null
      },{
        "title": "Coordconv",
        "excerpt":"CoordConv CoordConv: study the transformation between coordinates and images How to link the image to coordinates? This paper introduce a new method to connect them. An Intriguing Failing of Convolutional Neural Networks and the CoordConv Solution (NeurIPS 2018): Visit the blog for better understanding The detailed explanation of those two...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/CoordConv/",
        "teaser": null
      },]
