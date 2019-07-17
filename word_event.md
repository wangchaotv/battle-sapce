## [Browser Event List](https://developer.mozilla.org/zh-CN/docs/Web/Events)

### Most common categories

#### Resource events

1. error ['erər] n. 错误
2. abort [ə'bɔːrt] v. 中止
3. load [loʊd] v. 装载 n. 负荷
4. beforeunload
5. unload [ˌʌn'loʊd] v. 卸下

   - source [sɔːrs] n. 来源
   - resource ['riːsɔːrs] n. 资源

#### Network events

1. online [ˌɑːn'laɪn] adj. 在线的 联机的
2. offline [ˌɔːf'laɪn] adj. 脱机的

#### Focus events

1. focus ['foʊkəs] n. 焦点 v. 使集中
2. blur [blɜːr] n. 模糊 v. 使模糊

#### Websocket events

1. open
2. message
3. error
4. close [kloʊs] v. 关 结束

   - web [web] n. 网 网络
   - socket ['sɑːkɪt] n. 插座

#### Session History events

1. pagehide
2. pageshow
3. popstate

   - hide [haɪd] v. 藏 隐藏
   - show [ʃoʊ] v. 显示 展示

#### CSS Animation events

1. animationstart
2. animationcancel
3. animationend
4. animationiteration

   - animation [ˌænɪ'meɪʃn] n. 动画片
   - iteration [ˌɪtə'reɪʃn] n. 迭代 循环

#### CSS Transition evnets

1. transitionstart
2. transitioncancel
3. transitionend
4. transitionrun

   - transition [træn'zɪʃn] n. 转变 过渡

#### Form events

1. reset
2. submit

   - reset [ˌriː'set] n.v. 重新设定
   - submit [səb'mɪt] v. 提交

#### Printing events

1. beforeprint
2. afterprint

#### Text Composition events

1. compositionstart
2. compositionupdate
3. compositionend

   - text [tekst] n. 文本
   - composition [ˌkɑːmpə'zɪʃn] n. 作文 成分

#### View events

1. fullscreenchange
2. fullscreenerror
3. resize
4. scroll

   - full [fʊl] adj. 满的 完全的
   - view [vjuː] n. 视野 v. 看
   - screen [skriːn] n. 屏幕
   - resize [ˌriː'saɪz] v. 调整大小
   - scroll [skroʊl] n. 卷轴 v. 卷动

#### Clipboard events

1. cut
2. copy
3. paste

#### Keyboard events

1. keydown
2. keypress
3. keyup

#### Mouse events

1. auxclick
2. click
3. contextmenu
4. dblclick
5. mousedown
6. mouseenter
7. mouseleave
8. mousemove
9. mouseover
10. mouseout
11. mouseup
12. pointerlockchange
13. pointerlockerror
14. select
15. wheel

#### Drag & Drop events

1. drag
2. dragend
3. dragenter
4. dragstart
5. dragleave
6. dragover
7. drop

#### Media events

1. audioprocess
2. canplay
3. canplaythrough
4. complte
5. durationchange
6. emptied
7. ended
8. loadeddata
9. loadedmetadata
10. pause
11. play
12. playing
13. ratechange
14. seeked
15. seeking
16. stalled
17. suspend
18. timeupdate
19. volumechange
20. waiting

#### Progress events

1. abort
2. error
3. load
4. loadend
5. loadstart
6. progress
7. timeout

#### Storage events

1. change (Non-standard events)
2. storage

#### Update events

1. checking
2. downloading
3. error
4. noupdate
5. obsolete
6. updateready

#### Value change events

1. broadcast
2. CheckboxStateChange
3. hashchange
4. input
5. RadioStateChange
6. readystatechange
7. ValueChange

#### Uncatgorized events

1. invalid
2. message
3. open
4. show

### Less common and non-standard events

#### Abortable Fetch events

1. abort

#### WebVR events

1. vrdisplayactivate
2. vrdisplayblur
3. vrdisplayconnect
4. vrdisplaydeactivate
5. vrdisplaydisconnect
6. vrdisplayfocus
7. vrdisplaypresentchange

#### SVG events

1. SVGAbort
2. SVGError
3. SVGLoad
4. SVGResize
5. SVGScroll
6. SVGUnload
7. SVGZoom

#### Database events

1. abort
2. blocked
3. complete
4. error
5. success
6. upgradeneeded
7. versionchange

#### Script events

1. afterscriptexecute
2. beforescriptexecute

#### Menu events

1. DOMMenuItemActive
2. DOMMenuItemInactive

#### Window events

1. close

#### Popup events

1. popuphidden
2. popuphiding
3. popupshowing
4. popupshown

#### Tab events

1. visibilitychange

#### Battery events

1. chargingchage
2. chargingtimechange
3. dischargingtimechange
4. levelchange

#### Call events

1. alerting
2. busy
3. callschanged
4. cfstatechange
5. connected
6. connecting
7. dialing
8. disconnecting
9. error
10. held,holding
11. incoming
12. resuming
13. statechange
14. voicechange

#### Sensor events

1. compassneedscalibration
2. devicemotion
3. deviceorientation
4. orientationchange

#### Smartcard events

1. icccardlockerror
2. iccinfochange
3. smartcard-insert
4. smartcard-remove
5. stkcommand
6. stksessionend
7. cardstatechange

#### SMS and USSD event

1. delivered
2. received
3. sent
4. ussdreceived

#### Frame events

1. mozbrowserclose
2. mozbrowsercontextmenu
3. mozbrowsererror
4. mozbrowsericonchange
5. mozbrowserlocationchange
6. mozbrowserloadend
7. mozbrowserloadstart
8. mozbrowseropenwindow
9. mozbrowsersecuritychange
10. mozbrowsershowmodalprompt
11. mozbrowsertitlechange

#### DOM mutation events

1. DOMAttributeNameChanged
2. DOMAttrModified
3. DOMCharacterDataModified
4. DOMContentLoaded
5. DOMElementNameChanged
6. DOMNodeInserted
7. DOMNodeInsertedIntoDocument
8. DOMNodeRemoved
9. DOMNodeRemovedFromDocument
10. DOMSubtreeModified

#### Touch events

1. touchcancel
2. touchend
3. touchmove
4. touchstart

#### Pointer events

1. pointerover
2. pointerenter
3. pointerdown
4. pointermove
5. pointerup
6. pointercancel
7. pointerout
8. pointerleave
9. gotpointercapture
10. lostpointercapture

## [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
