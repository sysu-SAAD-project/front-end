
<view class="posterwall-topBarPicker" wx: if="{{campusSelVisible}}" >
  <checkbox-group class="bl-center" bindchange= "changeCampusFilter" >
    <label class="checkbox-label" wx: for="{{campusSel}}" wx:key = "{{item.value}}" >
      <view class="divLine" > </view>
        < view class="checkbox-box" >
          <view class="checkbox-line" wx: if="{{item.value % 2 == 0}}" > </view>
            < view class="checkbox-text" > {{item.name }}</view>
              < view class="single-checkbox {{item.checked ? 'is_checked':''}}" >
                <checkbox value="{{item.value}}" checked= "{{item.checked}}" hidden= "false" />
                  <image src="../../../image/check.png" mode= "aspectFill" > </image>
                    < /view>
                    < /view>
                    < /label>
                    < /checkbox-group>
                    < view class='button-gray' bindtap= 'resetCampus' > 重置 < /view>
                      < view class='button-blue' bindtap= 'setCampus' > 确认 < /view>  
                        < /view>

                        < view class="posterwall-topBarPicker" wx: if="{{categorySelVisible}}" >
                          <checkbox-group class="bl-center" bindchange= "changeCategoryFilter" >
                            <label class="checkbox-label" wx: for="{{categorySel}}" wx:key = "{{item.value}}" >
                              <view class="divLine" > </view>
                                < view class="checkbox-box" >
                                  <view class="checkbox-line" wx: if="{{item.value % 2 == 0}}" > </view>
                                    < view class="checkbox-text" > {{item.name }}</view>
                                      < view class="single-checkbox {{item.checked ? 'is_checked':''}}" >
                                        <checkbox value="{{item.value}}" checked= "{{item.checked}}" hidden= "false" />
                                          <image src="../../../image/check.png" mode= "aspectFill" > </image>
                                            < /view>
                                            < /view>
                                            < view class="divLine" wx: if="{{(categorySel.length % 2 == 1) && (item.value == categorySel.length - 2)}}" > </view>
                                              < /label>
                                              < /checkbox-group> 
                                              < view class='button-gray' bindtap= 'resetCategory' > 重置 < /view>
                                                < view class='button-blue' bindtap= 'setCategory' > 确认 < /view>  
                                                  < /view>

                                                  < view class="topBarBottomLine" > </view>
