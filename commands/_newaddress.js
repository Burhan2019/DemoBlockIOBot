/*CMD
  command: /newaddress
  help: Get newly generated address, and its unique(!) label generated by Block.io.
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 🖍new address
CMD*/

Libs.BlockIO.Bitcoin.getNewAddress({ onSuccess: "/onnewaddress", onError: "/onerror" } );
