# Azure IoT Hub

* 示意圖
![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_16___10_46_12-1542336445287.png)

* CDS Info
  * Message Property : MessageCatalogId, Type(=Message)
  * Message Element : companyId, msgTimestamp, equipmentId, equipmentRunStatus
* 安裝相關的 NPM 套件
  * npm install azure-iot-device
  * npm install azure-iot-device-amqp
* connectionString
  * 取得 Connection string
    * Azure Portal ➙ IoT Hub ➙ Shared access policies ➙ iothubowner ➙ Connection string—primary key
  * 產生 Device 的 Connection string
    * 取得 Device Explorer 軟體
      * 下載網址 [SetupDeviceExplorer.msi](https://github.com/Azure/azure-iot-sdk-csharp/releases?after=2018-04-02)
      
      ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_14___9_18_33-1542158374861.png)
      
    * 透過 Device Explorer Twin 軟體 ➙ 點選 【 Configuration 】 頁籤 ➙ 在 【 Connection Information 】 欄位中填入上一步驟取得的 Connection string—primary key ➙ 點擊 【 Update 】
    * 點選 【 Management 】 頁籤 ➙ 對 Device 點選右鍵 ➙ 選擇 【 Copy connection string for selected device(s) 】 選項
    
    ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_14___8_58_14-1542157249842.png)
    
    * 將上一步驟的 connection string 貼到 【 CDS_IoTHub.js 】 程式的第四行 【 '' 】 裡面
    
    ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_14___9_20_33-1542158454782.png)
    
    * 執行程式
      * node CDS_IoTHub.js
      * 執行結果
      
      ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_14___9_08_15-1542157726515.png)

* MQTTLens
    * Topic
      * ....../alarm
    * Message
      * https://github.com/ArcherHuang/Edge/blob/master/Azure/message.txt
