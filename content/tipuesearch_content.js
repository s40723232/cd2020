var tipuesearch = {"pages": [{'title': 'WEEK', 'text': 'WEEK1~5 \n WEEK6~9 \n WEEK10~14 \n WEEK15~17 \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK1~5', 'text': '建立自己的倉儲 \n 1.在GITHUB上新增倉儲cd2020 \n 2.git clone到自己的隨身碟 \n 3.在黑窗打 git submodule add https://github.com/mdecourse/cmsimde.git \n 4.就可以開啟進態網頁 開使編輯 \n \n \n 更新PYTHON到2.8.3 \n 1.先在cd2020裡新增data \n 2.進去再新增py283 protablegit與wscite432 \n 3. 進入官網打PYTHON2.8.3下載下來 \n 4.不要點PIP按NEXT \n 5.好了之後解壓縮到CD2020 \n 6.在裡面先用好這三個資料夾 \n 7.檔案放進去解壓縮 \n 8.在外面也用好STAR跟STOP \n 9.把程式打進去改檔名 \n \n 亂數分組程式-乙班 \n \n \n topic 0 11~17頁翻譯 \n \n https://github.com/s40723232/cd2020/tree/master/downloads \n 2. 練習使用Pyslvs \n \n', 'tags': '', 'url': 'WEEK1~5.html'}, {'title': 'WEEK6~9', 'text': "上課直播影片 \n \n V-rep四輪車 \n 1.先劃出四輪車 \n 2.輪子、驅動軸、車身分支要用好 \n 3.把前右輪名子改成right_motor 左輪改成left_motor \n 4.匯入程式 \n 5.完成 \n \n V-rep四輪車程式 \n -- This script is threaded! It is a very simple example of how Ackermann steering can be handled.\n-- Normally, one would use a non-threaded script for that\n\xa0\nthreadFunction=function()\n\xa0\xa0\xa0\xa0while simGetSimulationState()~=sim_simulation_advancing_abouttostop do\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- Read the keyboard messages (make sure the focus is on the main window, scene view):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0message,auxiliaryData=simGetSimulatorMessage()\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0while message~=-1 do\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (message==sim_message_keypress) then\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2007) then\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- up key\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredWheelRotSpeed=desiredWheelRotSpeed+wheelRotSpeedDx\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2008) then\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- down key\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredWheelRotSpeed=desiredWheelRotSpeed-wheelRotSpeedDx\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2009) then\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- left key\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=desiredSteeringAngle+steeringAngleDx\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (desiredSteeringAngle>45*math.pi/180) then\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=45*math.pi/180\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2010) then\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- right key\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=desiredSteeringAngle-steeringAngleDx\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (desiredSteeringAngle<-45*math.pi/180) then\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=-45*math.pi/180\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0message,auxiliaryData=simGetSimulatorMessage()\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- We handle the front left and right wheel steerings (Ackermann steering):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0steeringAngleLeft=math.atan(l/(-d+l/math.tan(desiredSteeringAngle)))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0steeringAngleRight=math.atan(l/(d+l/math.tan(desiredSteeringAngle)))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetPosition(steeringLeft,steeringAngleLeft)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetPosition(steeringRight,steeringAngleRight)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- We take care of setting the desired wheel rotation speed:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetVelocity(motorLeft,desiredWheelRotSpeed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetVelocity(motorRight,desiredWheelRotSpeed)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- Since this script is threaded, don't waste time here:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSwitchThread() -- Resume the script at next simulation loop start\n\xa0\xa0\xa0\xa0end\nend\n\xa0\n-- Put some initialization code here:\n-- Retrieving of some handles and setting of some initial values:\nsteeringLeft=simGetObjectHandle('Steer_left_joint')\nsteeringRight=simGetObjectHandle('Steer_right_joint')\nmotorLeft=simGetObjectHandle('Front_left_joint')\nmotorRight=simGetObjectHandle('Front_right_joint')\ndesiredSteeringAngle=0\ndesiredWheelRotSpeed=0\nsteeringAngleDx=2*math.pi/180\nwheelRotSpeedDx=20*math.pi/180\nd=0.755 -- 2*d=distance between left and right wheels\nl=2.5772 -- l=distance between front and read wheels\n\xa0\n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n\xa0\xa0\xa0\xa0simAddStatusbarMessage('Lua runtime error: '..err)\nend\n\xa0\n-- Put some clean-up code here: \n 上課直播影片 \n \n \n Assignment 1 工作分配與問題討論 (組長直播影片) \n \n \n Assignment 2 工作分配與問題討論\xa0 (組長直播影片) \n \n", 'tags': '', 'url': 'WEEK6~9.html'}, {'title': 'WEEK10~14', 'text': 'CMS \n 1.登錄到您的@gm帳戶 2.進入 https://console.developers.google.com \n 3.接受許可並創建Google API項目 \n 4.啟用Google +域API \n 5.在Google + Domain API憑據下，按CONFIGURE CONSENT SCREEN按鈕 \n 6.選擇內部或外部用戶類型並添加新的應用程序名稱 \n 7.在“ API和服務”下，進入“憑據”頁面 \n \n 8.為Web應用程序創建“ OAuth 2.0客戶端ID”類型的憑據 \n \n 9.進入 https://localhost:8443 \n \n 10.將您的客戶ID和客戶機密保存到oauth_gm.txt中 (因為有些跑很久所以用兩個影片) \n \n \n \n \n week12 問題討論 (組長直播影片) \n \n \n V-rep虛擬主機設置 \n 下載ubuntu \n 設置網路HOST-ONLY \n 開啟 \n 密碼 kmol2020 \n 選Activities 在開啟 LXTermial \n 輸入xterm& \n 輸入 cd coppeliasim4_rev4 \n 輸入 cd CoppeliaSim_Edu_0_0_Ubuntu18_04 \n 輸入 ./coppeliaSim.sh 開啟V-rep \n 這樣就完成了\xa0 \n \n 在家裡做一次 V-rep虛擬主機設置 \n \n \xa0 \n week13 問題討論 (組長直播影片) \n \n W13-2b \n 第13週 上課分組 第1組: \n http://mde.tw/cdbw13-1 \xa0 \n https://github.com/mdecourse/cdbw13-1.git \xa0 \n \n Remote API連線 \n 下載Xming與老師的控制程式 \n 新增3個虛擬主機，NAT網路埠號 \n 我嘗試用PUTTY開啟V-REP但失敗了 \n 所以我用XMING開 \n 步驟跟之前開V-REP的方式一樣 \n 開起XLaunch.exe 都按下一步 \n 好了之後開起 老師的控制程式 car_model.py > GO \n \n IPv4 Ubuntu對外連線設定操作 \n 新增整體系統的埠號 \n 主機網路改NAT NETWORK \n 啟動 \n 密碼 kmol2020 \n 開啟lxtermial \n ifconfig > sudo apt install net-tools \n 密碼 kmol2020 \n cd cd2020pj1 > git pull \n sudo vi wsgi.py > 按i編輯 \n host改成10.0.2.4 \n 儲存後 > leo \n Nav裡搜尋allowExt \n 新增ttt檔 \n 進入TMP > sudo vi oauth_scrum.txt \n 輸入 python3 wsgi.py \n 完成 \n \n \n \n week14 問題討論 (組長直播影片) \n \n W14-2b \n 第14週上課分組第1組: \n http://mde.tw/cdbw14-1 \xa0 \n https://github.com/mdecourse/cdbw14-1.git \n', 'tags': '', 'url': 'WEEK10~14.html'}, {'title': 'WEEK15~17', 'text': '6/18上課紀錄1(使用IPV6開啟網站) \n \n \n WEEK15紀錄 \n WEEK15 以前做的東西 \n \n \n \n', 'tags': '', 'url': 'WEEK15~17.html'}, {'title': 'Assignment', 'text': '下載 \n', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': 'PDF \n \n (電腦沒WORD所以先打在這邊) \n 心得 : 這次的祖耀工作是寫出亂數分組程式，經過這次的學習有比較聊解PYTHON的程式寫法，不過還只是簡單的。 \n', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Assignment3', 'text': '\n PDF網址: https://github.com/s40723232/cd2020/tree/master/downloads \n 心得:讀完這篇文章， 了解如何設計機電系統，也 知道此類系統的設計階段是什麼，還有 如何處理設計的每個階段都有清晰的想法機電一體化系統，學到很多東西，希望可以應用在以後的協同處理上面。 \n', 'tags': '', 'url': 'Assignment3.html'}, {'title': 'Topic', 'text': '1.2.2 確定協作產品設計流程 \xa0 \n 下一步是將每個公司的設計流程整合到協作中，通過“馬賽克方法”進行主動設計過程。我們首先收集了部分設計公司中特定項目的流程。這很容易做到，因為公司的設計師描述了在相同項目中分享的經驗，從而使各個局部設計過程重疊並相互補充彼此。之後通過比較和合併部分過程合併過程元素。從工業設計中提取的部分過程簽名人的採訪數據提供了有關工業設計活動的豐富信息， 包括與工程設計師的互動行為，但信息較少純工程設計活動。工程界也是如此 設計。將公司的工業設計師的部分流程合併到了 圍繞工業設計活動重建設計流程。在同一時間，我們利用工程設計師提供的信息來補充 並從工程設計方面加強設計活動。我們圍繞同一工程設計活動重新構建設計流程辦法。最終將這兩個設計過程合併為一個協作產品 設計過程。在鑲嵌方法中，將交叉檢查的局部pro- cesses有助於提高可靠性和通用性。這明顯減少了構建信息不完整的流程的可能性 通過抵消彼此的信息。“馬賽克方法”減少了構建錯誤過程的可能性。 \xa0 \n \xa0 在比較部分設計過程時，我們發現了產品計劃團隊參與了一些設計過程元素。因此，將其角色。這意味著產品規劃團隊在協作中扮演了一定的角色，工業設計和工程設計的口頭設計項目。標準化一些表示相同任務或事件的術語。但是他們的編碼方式不同，因為受訪者使用它們的方式略有不同-彼此之間例如，發現會議已編碼在部分設計過程中作為“產品計劃會議”和“產品”發展會議”。因此將它們統一為“產品計劃會議。’也有人稱工業設計結果不同，例如 “模型”，“設計模型”或“模型製造”。將它們統一為 “設計模型”。還標準化了“模型評估活動”，“樣機選擇”作為“樣機評估活動”。這項工作是通過交叉 在評估含義的同時檢查每個公司的面試數據，並具體術語的上下文。其實，設計師似乎理解每個公司記錄的設計流程，其中標準術語是定義，但不是特別意識到這一點。看來他們無視了 標準化流程，因為市場形勢迫使他們轉向 快速移動。語言差異也是造成術語差異的可能原因。 在產品設計區中，本機單詞和借用單詞混合使用 在韓國。例如，我們同時使用借用單詞和本機單詞 滿足英語中的“設計”。化和地理位置的差異 兩支球隊可能會造成任期差異。除F公司外， 兩個部門位於不同的物理空間，至少在不同的位置 地板。 \xa0 \n \xa0 通過合併階段元素（輸入， 任務，事件和輸出）放入框中，並用相關任務將其命名（請參見 圖2）。例如，工業設計師開始繪製各種想法 根據前一階段的研究結果繪製的草圖。他們選擇一個 通過評估獲得一些最佳草圖。根據選擇結果，他們 決定進入下一階段或重複當前階段。 \xa0 \n ‘理想 草圖”階段由“研究結果（輸入）”，“想法草圖（任務）”，“評估 ”（事件）”和“最佳草圖（輸出）”。 \xa0 \n \xa0 我們從所有方面獲得了12個協作產品設計流程 公司；每個公司一到三個（請參閱表2中的第三行）。 \xa0 \n \xa0 將其發送給各公司的線人，以檢查我們的解釋- 他們的過程。在此過程中進行了較小的更改。 \xa0 \n \xa0 圖3顯示了公司A的協作產品設計過程。 在兩側顯示了兩個並行過程：工業設計過程 \xa0 \n \xa0 左側是工程設計流程，右側是工程設計流程， 中間的兩個插圖之間的位置。“產品計劃會議” \xa0 \n \xa0 在中間是由“產品計劃小組”主持的活動 如果他們繼續將概念商業化或重新 拒絕了文本框是由輸入任務事件輸出組成的階段。 \xa0 \n 帶有虛線的文本框不是階段。他們沒有全部四個 舞台元素。例如，“檢查”是一種決定。 \xa0 \n \xa0 垂直箭頭指示流程的進度。它 還顯示了信息流的方向，其中前者的輸出 階段成為下一階段的輸入。水平箭頭顯示 “信息流”或“互動”的方向。圓形箭頭代表 在各階段中反复而強烈的互動。圖3和 圖5顯示了它們的連通性。這些內容後來被分為幾個階段， 在下一節中說明。 \xa0 \n \xa0 \n 1.2.3 簡化流程 \xa0 \n 一旦制定了每個公司的協作產品設計流程， 對它們進行了分類，以確定其類型，目的和條件 由於每個公司的流程都包含詳細的設計操作和 形成，很難在公司之間直接比較它們。 以“流程”的概念簡化了每個公司的設計流程 塊以幫助其可比性，同時保持必要的 特徵。 \xa0 \n \xa0 發現在一組小的連續階段中存在一種模式。那裡 是完成所有連續階段的主要工作。完成後 明確的新階段從另一項工作開始。我們將這些小階段定義為 “流程塊”。它的特徵在於初始輸入，內部迭代，決策， 製造，最終結果和不可逆的趨勢（圖4）。內置的 流程塊中的流程從初始輸入開始，跨小範圍運行 裡面的階段。迭代或反饋可能在內部的小階段之間發生 大塊。最後，他們對最終結果做出最終決定。 這是一個里程碑，指示該階段將跳到下一階段。 \xa0 \n 例如，在圖3中藍色方框中，該塊的主要工作是 制定執行六個小階段的設計概念。當他們在 渲染階段，如果渲染超出了- 對渲染評估事件不滿意。在最後階段， 設計樣機，因為結果由高層管理人員確認，並且 然後跳到“產品計劃會議”。 兩個流程塊之間的流程幾乎沒有機會 在前一個結果進入下一個塊的輸入之後反轉。 跨團隊通常進行最終設計，並由 每個部門的最高經理。返回上一個塊意味著它 無法滿足投放市場的時間表。因此，應該有一個高層管理人員- 年齡問題的決定。根據訪談數據，他們寧願 刪除項目，然後返回上一階段。迭代和反饋 大多數基於階段的模型（Wynn＆ 克拉克森（2005）。將一個或兩個並行塊視為一個 本研究中的階段，但是階段之間的反向迭代或反饋 在實際情況中很少發生。它發生在一個塊中的各個階段之間。 \xa0 \n 因此，似乎項目之間幾乎不可能放棄 階段，但可能在階段之間。 通過其主要工作來命名流程塊。在命名塊時 我們發現，“概念設計”一詞在工程上的用法有所不同 設計和工業設計。工程設計中的概念設計是關於 通過開發廣泛的解決方案來與產品的工作方式相關的技術概念 有關工作結構和功能的說明（Haik＆Shahin，2010； Kroll， Condoor和Jansson，2001；烏爾曼，2009年）。 \xa0 \n 但是，工業設計師 在概念設計中決定產品樣式和交互的方向 階段，以概念關鍵字，情緒板，想法表示 草圖和用戶場景（Press＆Cooper，2003; Tovey＆Harris， 1999; Vredenburg，Isensee，Righi和Design，2001年）。 \xa0 \n 因此，我們標記了這個概念 工業設計師的設計活動為“ Concept Design-I”和engi- 將設計師稱為“ Concept Design-E”。 \xa0 \n 圖5是圖3的簡化版本。圖3中的彩色框 在圖5中使用相同顏色的塊進行了簡化。 圖3變為“概念設計-I”。 圖3定義為“產品計劃”，並以長條形顯示 六邊形。它被確定為單相，因為它是分離且獨特的 設計活動。在紅色塊內部，有兩個並行的處理塊； 右側的“ Concept Design-E”（紅色的小框）是“主要流程” 塊”和“形狀修改”（左側）（黃色） 。這兩個大塊不能視為單獨的階段，因為它們是 再加上從頭到尾的大紅色方塊。互動 兩個設計師團隊之間的關係很強。區分兩個平行 塊，我們用粗實線和相應的 用淺實線刺成一塊。在綠色的街區，因為有一點 所有12個流程之間在設計活動上的差異，我們將 詳細設計，測試和生產的兩個順序過程塊 合而為一。在本研究中我們將它們視為一個階段。當 。。。 的時候 綠色區塊的設計過程繼續進行，工業設計師對此做出了回應 根據工程設計師的要求或他們自己的目的而定的時間 用於設計檢查。他們通常將這些活動稱為“後續活動”， 激發他們的主要任務。這些活動顯然存在 但不屬於流程塊。它們是離散的過程元素，如 如圖3所示，因此用虛線表示。為了幫助視覺 清晰，實心箭頭，雙向寬箭頭和單個方向 傳統的寬箭頭表示流程，相互交互和單向 互動。 \xa0 \n \xa0 \n 1.2.4 確定協作設計過程的類型 \xa0 \n 對12種簡化的協作產品設計進行了比較和分類 基於流程結構，輸入和結果相似性的流程 過程塊和階段，以及工業設計師之間的互動 和工程設計師。我們首先比較每個流程塊和階段 以及來自其他11個流程的相應流程塊和階段 結構方面。然後比較了每個對應的輸入和結果 跨越12個流程的優化階段。例如，“概念設計-我” 圖5中的階段沒有輸入，但是會產生“設計模型”作為輸出。 其他流程中的某些“概念設計-I”階段始於收到 工程設計團隊的初步佈局。因此，檢查 階段的投入和結果的類型為確定過度 所有流程。最後，評估了工業品 簽名者和工程設計師。沒有互動 在藍色塊中的兩個組之間。但是，在紅色方塊中 是它們之間的強大互動。結果我們將12個協作項目 將產品設計過程分為四種類型的代表過程。 \xa0 \xa0 \n 根據以下內容命名了四種類型的協作產品設計流程： 他們的特點。它們是類型 \xa0 \n 1：由ID主導的概念驅動過程 \xa0 \n \xa0 \xa0 \n 2：ID領導的內外聯合流程 \xa0 \n \xa0 \n 3：ED主導的Inside-first Pro \xa0 \n \xa0 \n 4：ID＆ED協同流程 \xa0 \n 以及它們之間的區別 \xa0 \n \xa0 大多出現在設計概念的早期階段 並初步佈局。之後有一點區別 詳細設計階段，其中工程設計師的任務占主導地位。它是 相當標準化。這表明協作產品的類型 設計過程由細節之前採用的方法決定 設計階段。 \xa0 \n \xa0 公司根據設計採用了一種到三種類型的設計流程 他們的目標和情況（請參見表3）。類型1和類型4僅用於 新設計，但C公司在市場重新採用時採用了類型1 在短時間內尋求新的樣式。這發生在 有很多參考產品，交貨時間很短。使用類型2 適用於新設計和重新設計。有趣的是，類型3僅用於 重新設計。除公司C（移動版）外，大多數流程都用於B2C 通訊產品製造商”，將其產品發佈到3月， 通過服務提供商獲取。考慮到這一點，公司C在 與公司A和E不同的情況，業務類型（B2B或B2C） 會影響設計過程的選擇。 \xa0 \n \xa0 關於實際設計過程與書面證明之間的區別 當然，他們中的大多數回答說他們已經記錄了標准設計 所有公司的業務流程，但它們根本不遵循。支持這個 根據Maffin（1998）的發現，設計師開發了自己的方法 根據產品開發環境。似乎文檔 指導流程定義了標準化的任務流程和階段，任務和角色 每個部門的職位以及根據項目類型的項目時間。然而， 他們總是被迫縮短實際項目時間。這種 管理壓力可能導致他們不遵守文件規定 處理。 \xa0 \n \xa0 通過比較每種類型過程的使用頻率，我們發現 3是最常用的，而Type 4是最少的。使用類型2 比類型1更頻繁。除公司B以外，類型3最常見。 類似於大多數受訪者所說的公司標準。 Consid- 提出重新設計比新設計更頻繁發生的論點 （Roozenburg＆Eekels，1995）和成功的徹底創新發生 \xa0 \n 也許每5年10年一次（Norman＆Verganti，2014年），這是一個原因- 能夠找到。由於類型4是由個人自發發起的，因此不是 一套官方的，標準的程序，這種情況很少見。 \xa0 \n \xa0 每種類型的設計過程的詳細特徵以及相關的 上下文將在以下各節中介紹。 \xa0 \n', 'tags': '', 'url': 'Topic.html'}]};