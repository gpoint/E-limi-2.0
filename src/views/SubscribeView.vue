<template>
<div>
    <base-nav></base-nav>

    <header class="bg-gradient-dark">
        <div class="page-header min-vh-75" style="background-image: url('img/shapes/waves-white.svg');">
            <span class="mask bg-gradient-primary opacity-8 "></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center mx-auto my-auto">
                        <h1 class="text-white">Work with an amazing design</h1>
                        <p class="lead mb-4 text-white opacity-8">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
                    </div>
                </div>
            </div>
            <div class="position-absolute w-100 z-index-1 bottom-0">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="moving-waves">
                        <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                        <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                        <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                        <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
                    </g>
                </svg>
            </div>
        </div>
    </header>

    <div class="page-header my-8">
        <div class="position-absolute fixed-top ms-auto w-50 h-100 rounded-3 z-index-0 d-none d-sm-none d-md-block me-n4" style="background-image: url(../../assets/img/ivancik.jpg); background-size: cover;">
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-7 d-flex justify-content-center flex-column">
                    <div class="card card-body d-flex justify-content-center shadow-lg p-5 blur align-items-center">
                        <h3 class="text-center"></h3>
                        <form role="form" id="contact-form" method="post" autocomplete="off">
                            <div class="card-body">
                                <div class="mb-2">
                                    <label>Card Number</label>
                                    <div class="input-group">
                                        <input @input.prevent="setCardNumber" v-model="card.number" class="form-control" placeholder="0000 0000 0000 0000" ref="card_number">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Expiry</label>
                                        <div class="input-group mb-4">
                                            <input @input.prevent="setCardExpiry" v-model="card.expiry" class="form-control" placeholder="MM/YY" ref="card_expiry">
                                        </div>
                                    </div>
                                    <div class="col-md-6 ps-2">
                                        <label>CVV</label>
                                        <div class="input-group">
                                            <input @input.prevent="setCardCVV" v-model="card.cvv" class="form-control" placeholder="000" ref="card_cvv">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <!-- <div class="col-md-12">
                                        <div class="form-check form-switch mb-4">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">I agree to the <a href="javascript:;" class="text-dark"><u>Terms and Conditions</u></a>.</label>
                                        </div>
                                    </div> -->
                                    <div class="col-md-12 mt-4">
                                        <button type="submit" class="btn bg-gradient-dark w-100">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <base-footer></base-footer>

</div>
</template>

<script>
import ccType from 'credit-card-type';

import BaseNav from '../components/navbars/BaseNav.vue';
import BaseFooter from '../components/footers/BaseFooter.vue';

const CARD_GAPS = [4, 8, 12];

import SubscriptionService from '../services/subscription';

// Get card type and separator gaps
const getCardInfo = (num = '') => {
    const info = ccType(num)[0];
    if (info) {
        const isVerve = info.type === 'maestro';
        return {
            type: isVerve ? 'verve' : info.type,
            gaps: isVerve ? CARD_GAPS.concat(16) : info.gaps || CARD_GAPS,
        };
    } else
        return {
            type: 'none',
            gaps: CARD_GAPS,
        };
};

const formatNumber = (num = '') => {
    return String(num).replace(/\D/g, '');
};

// Format Credit Card
const formatCard = (num = '', gaps = CARD_GAPS) => {
    let str = '';
    for (let i = 0; i < num.length; i++) {
        if (gaps[0] === i || gaps[1] === i || gaps[2] === i || gaps[3] === i) {
            str += ' ';
        }
        str += num[i];
    }
    return str;
};

import {
    useUserStore
} from "../stores/user";

export default {
    components: {
        BaseNav,
        BaseFooter,
    },
    data() {
        return {
            card: {
                type: '',
                number: '',
                number_gaps: '',
                expiry: '',
                cvv: '',
            }
        };
    },
    methods: {
        setCardNumber(event) {

            const val = formatNumber(event.target.value);

            if ((this.card.type === 'mastercard' || this.card.type === 'visa') && val.length >= 16) {
                // automagically move to expiry input
                const expiryInput = this.$refs.card_expiry;
                if (expiryInput) {
                    expiryInput.focus();
                }
            }

            if (val.length > 3 && !this.card.type) {
                let {
                    type,
                    gaps
                } = getCardInfo(val);

                this.card.type = type;
                this.card.number = formatCard(val, gaps);
            } else {
                this.card.number = formatCard(val, CARD_GAPS);
                this.card.type = val.length > 3 ? this.card.type : '';
            }
        },

        setCardExpiry(event) {
            let val = event.target.value;
            let old = this.card.expiry;
            let final = '';
            if (old.length > val.length) {
                // Text is being backspaced. Do not process
                final = val;
            } else {
                val = val.replace(/\D/g, '');
                if (val.length <= 1) {
                    const number = Number.parseInt(val);
                    if (number > 1) {
                        final = `0${number}`;
                    } else {
                        final = val;
                    }
                } else if (val.length === 2) {
                    const number = Number.parseInt(val);
                    if (number > 12) {
                        final = '1';
                    } else {
                        final = val + '/';
                    }
                } else {
                    final = val.slice(0, 2) + '/' + val.slice(2);
                }
            }

            final = final.slice(0, 5);

            if (final.length >= 5) {
                const cvvInput = this.$refs.card_cvv;
                if (cvvInput) {
                    cvvInput.focus();
                }
            }

            this.card.expiry = final;
        },

        setCardCVV(event) {
            this.card.cvv = formatNumber(event.target.value);
        }

    }

}
</script>
