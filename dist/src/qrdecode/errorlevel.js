"use strict";
/*
  Ported to JavaScript by Lazar Laszlo 2011

  lazarsoft@gmail.com, www.lazarsoft.info

*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
*
* Copyright 2007 ZXing authors
*
* Licensed under the Apache License, Version 2.0 (the "License");
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
var ErrorCorrectionLevel = (function () {
    function ErrorCorrectionLevel(ordinal, bits, name) {
        this.ordinal_Renamed_Field = ordinal;
        this.bits = bits;
        this.name = name;
    }
    ErrorCorrectionLevel.forBits = function (bits) {
        if (bits < 0 || bits >= this.FOR_BITS.length) {
            throw "ArgumentException";
        }
        return this.FOR_BITS[bits];
    };
    Object.defineProperty(ErrorCorrectionLevel.prototype, "Bits", {
        get: function () {
            return this.bits;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ErrorCorrectionLevel.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ErrorCorrectionLevel.prototype.ordinal = function () {
        return this.ordinal_Renamed_Field;
    };
    ErrorCorrectionLevel.L = new ErrorCorrectionLevel(0, 0x01, "L");
    ErrorCorrectionLevel.M = new ErrorCorrectionLevel(1, 0x00, "M");
    ErrorCorrectionLevel.Q = new ErrorCorrectionLevel(2, 0x03, "Q");
    ErrorCorrectionLevel.H = new ErrorCorrectionLevel(3, 0x02, "H");
    ErrorCorrectionLevel.FOR_BITS = new Array(ErrorCorrectionLevel.M, ErrorCorrectionLevel.L, ErrorCorrectionLevel.H, ErrorCorrectionLevel.Q);
    return ErrorCorrectionLevel;
}());
exports.ErrorCorrectionLevel = ErrorCorrectionLevel;
//# sourceMappingURL=errorlevel.js.map