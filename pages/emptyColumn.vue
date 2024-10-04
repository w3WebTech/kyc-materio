<template>
  <div>
    <VContainer class="w-100 h-600">
      <div>
        <!-- Display data table -->
        <VRow>
          <VCol cols="12 my-4">
            <VTable>
              <thead>
                <tr>
                  <th class="text-uppercase">Client Code</th>
                  <th class="text-uppercase">EmailId</th>
                  <th class="text-uppercase">EmailSubject</th>
                  <th class="text-uppercase">EmailMsgId</th>
                  <th class="text-uppercase">EmailStatus</th>
                  <th class="text-uppercase">EmailSendDateTime</th>
                  <th class="text-uppercase">EmailDeliveredDateTime</th>
                  <th class="text-uppercase">EmailOpenedDateTime</th>
                  <th class="text-uppercase">EmailBouncedDateTime</th>
                  <th class="text-uppercase">clickedURl</th>
                  <th class="text-uppercase">EmailClickedDateTime</th>
                  <th class="text-uppercase">PSkey</th>
                  <th class="text-uppercase">EntryDate</th>
                  <th class="text-uppercase">EntryTime</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in filteredDesserts"
                  :key="item.dessert"
                >
                  <td>{{ item.clientCode }}</td>
                  <td>{{ item.emailId }}</td>
                  <td>{{ item.emailSubject }}</td>
                  <td>{{ item.emailMsgId }}</td>
                  <td>{{ item.emailStatus }}</td>
                  <td>{{ item.emailSentDateTime }}</td>
                  <td>{{ item.emailDeliveredDateTime }}</td>
                  <td>{{ item.emailOpenedDateTime }}</td>
                  <td>{{ item.EmailBouncedDateTime }}</td>
                  <td>{{ item.clickedURL }}</td>
                  <td>{{ item.emailClickedDateTime }}</td>
                  <td>{{ item.PSkey }}</td>
                  <td>{{ item.entryDate }}</td>
                  <td>{{ item.entryTime }}</td>
                </tr>
              </tbody>
            </VTable>
          </VCol>
        </VRow>
      </div>
    </VContainer>
    <VContainer class="w-100 h-600">
      <div>
        <!-- Display data table -->
        <VRow>
          <VCol cols="12 my-4">
            <VTable>
              <thead>
                <tr>
                  <th class="text-uppercase">UserCode</th>
                  <th class="text-uppercase">UserMobile</th>
                  <th class="text-uppercase">From</th>
                  <th class="text-uppercase">TemplateName</th>
                  <th class="text-uppercase">sendDateTime</th>
                  <th class="text-uppercase">sendReqData</th>
                  <th class="text-uppercase">SendResponceData</th>
                  <th class="text-uppercase">MsgStatus</th>
                  <th class="text-uppercase">StatusUpdatedTime</th>
                  <th class="text-uppercase">MessageId</th>
                  <th class="text-uppercase">MessageSendTime</th>
                  <th class="text-uppercase">SendWebHookData</th>
                  <th class="text-uppercase">MessageDeliveredTime</th>
                  <th class="text-uppercase">DeliveredWebHookData</th>
                  <th class="text-uppercase">MessageReadTime</th>
                  <th class="text-uppercase">ReadWebHookData</th>
                  <th class="text-uppercase">PSkey</th>
                  <th class="text-uppercase">EntryDate</th>
                  <th class="text-uppercase">EntryTime</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in filteredDesserts1"
                  :key="item.dessert1"
                >
                  <td>{{ item.userCode }}</td>
                  <td>{{ item.userMobile }}</td>
                  <td>{{ item.from }}</td>
                  <td>{{ item.templateName }}</td>
                  <td>{{ item.sendDateTime }}</td>
                  <td>{{ item.sendReqData }}</td>
                  <td>{{ item.sendResponseData }}</td>
                  <td>{{ item.msgStatus }}</td>
                  <td>{{ item.StatusUpdatedTime }}</td>
                  <td>{{ item.messageId }}</td>
                  <td>{{ item.messageSentTime }}</td>
                  <td>{{ item.SendWebHookData }}</td>
                  <td>{{ item.messageDeliveredTime }}</td>
                  <td>{{ item.DeliveredWebHookData }}</td>
                  <td>{{ item.MessageReadTime }}</td>
                  <td>{{ item.readWebhookData }}</td>
                  <td>{{ item.pskey }}</td>
                  <td>{{ item.entryDate }}</td>
                  <td>{{ item.entryTime }}</td>
                </tr>
              </tbody>
            </VTable>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          clientCode: 'varchar(100)',

          emailId: 'varchar(255)',

          emailSubject: 'varchar(255)',

          emailMsgId: 'varchar(255)',

          emailStatus: 'varchar(25)',

          emailSentDateTime: 'varchar(35)',

          emailDeliveredDateTime: 'varchar(35)',

          emailOpenedDateTime: 'varchar(35)',

          emailBouncedDateTime: 'varchar(35)',

          clickedURL: 'text',

          emailClickedDateTime: 'varchar(35)',

          PSkey: 'text',

          entryDate: 'varchar(35)',

          entryTime: 'varchar(35)',
        },
        {
          clientCode: 'varchar(100)',

          emailId: 'varchar(255)',

          emailSubject: 'varchar(255)',

          emailMsgId: 'varchar(255)',

          emailStatus: 'varchar(25)',

          emailSentDateTime: 'varchar(35)',

          emailDeliveredDateTime: 'varchar(35)',

          emailOpenedDateTime: 'varchar(35)',

          emailBouncedDateTime: 'varchar(35)',

          clickedURL: 'text',

          emailClickedDateTime: 'varchar(35)',

          PSkey: 'text',

          entryDate: 'varchar(35)',

          entryTime: 'varchar(35)',
        },
        {
          clientCode: 'varchar(100)',

          emailId: 'varchar(255)',

          emailSubject: 'varchar(255)',

          emailMsgId: 'varchar(255)',

          emailStatus: 'varchar(25)',

          emailSentDateTime: 'varchar(35)',

          emailDeliveredDateTime: 'varchar(35)',

          emailOpenedDateTime: 'varchar(35)',

          emailBouncedDateTime: 'varchar(35)',

          clickedURL: 'text',

          emailClickedDateTime: 'varchar(35)',

          PSkey: 'text',

          entryDate: 'varchar(35)',

          entryTime: 'varchar(35)',
        },
        {
          clientCode: 'varchar(100)',

          emailId: 'varchar(255)',

          emailSubject: 'varchar(255)',

          emailMsgId: 'varchar(255)',

          emailStatus: 'varchar(25)',

          emailSentDateTime: 'varchar(35)',

          emailDeliveredDateTime: 'varchar(35)',

          emailOpenedDateTime: 'varchar(35)',

          emailBouncedDateTime: 'varchar(35)',

          clickedURL: 'text',

          emailClickedDateTime: 'varchar(35)',

          PSkey: 'text',

          entryDate: 'varchar(35)',

          entryTime: 'varchar(35)',
        },
        {
          clientCode: 'varchar(100)',

          emailId: 'varchar(255)',

          emailSubject: 'varchar(255)',

          emailMsgId: 'varchar(255)',

          emailStatus: 'varchar(25)',

          emailSentDateTime: 'varchar(35)',

          emailDeliveredDateTime: 'varchar(35)',

          emailOpenedDateTime: 'varchar(35)',

          emailBouncedDateTime: 'varchar(35)',

          clickedURL: 'text',

          emailClickedDateTime: 'varchar(35)',

          PSkey: 'text',

          entryDate: 'varchar(35)',

          entryTime: 'varchar(35)',
        },
        // add more items to the array as needed
      ],
      filteredDesserts: [],
      desserts1: [
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        {
          userCode: 'varchar(35)',

          userMobile: 'varchar(15)',

          from: 'varchar(35)',

          templateName: 'varchar(100)',

          sendDateTime: 'varchar(35)',

          sendReqData: 'text',

          sendResponseData: 'text',

          msgStatus: 'varchar(50)',

          StatusUpdatedTime: 'varchar(35)',

          messageId: 'text',

          messageSentTime: 'varchar(35)',

          SendWebHookData: 'text',

          messageDeliveredTime: 'varchar(35)',

          DeliveredWebhookData: 'text',

          messageReadTime: 'varchar(35)',

          readWebhookData: 'text',

          pskey: 'text',

          entryDate: 'varchar(15)',

          entryTime: 'varchar(15)',
        },
        // add more items to the array as needed
      ],
      filteredDesserts1: [],
    }
  },
  mounted() {
    this.filteredDesserts = this.desserts
    this.filteredDesserts1 = this.desserts1 // initialize filteredDesserts with the full array
  },
  methods: {},
}
</script>
