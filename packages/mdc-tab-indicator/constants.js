/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/** @enum {string} */
const cssClasses = {
  ACTIVE: 'mdc-tab-indicator--active',
  ICON: 'mdc-tab-indicator--icon',
  ANIMATING_ICON_ACTIVATE: 'mdc-tab-indicator--icon-animating-activate',
  ANIMATING_ICON_DEACTIVATE: 'mdc-tab-indicator--icon-animating-deactivate',
  BAR: 'mdc-tab-indicator--bar',
  ANIMATING_BAR: 'mdc-tab-indicator--bar-animating',
};

/** @enum {string} */
const strings = {
  INDICATOR_SELECTOR: '.mdc-tab-indicator',
};

export {
  cssClasses,
  strings,
};
