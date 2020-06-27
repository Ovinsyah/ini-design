import * as React from 'react';
import Layout from '../../../layouts/Dashboard';
import { Icon, Created } from './style';
import Markdown from '../../../components/Markdown';
import { IniGrids, IniGrid } from 'ini-design';

const IgIcon = () => {
  return(
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path d="M1.12478 1.22472C-0.289717 2.69397 -0.000216767 4.25472 -0.000216767 8.99623C-0.000216767 12.9337 -0.687217 16.881 2.90828 17.8102C4.03103 18.099 13.979 18.099 15.1003 17.8087C16.5973 17.4225 17.8153 16.2082 17.9818 14.091C18.005 13.7955 18.005 4.20222 17.981 3.90072C17.804 1.64547 16.4158 0.345724 14.5865 0.0824738C14.1673 0.0217238 14.0833 0.00372377 11.9323 -2.62322e-05C4.30253 0.00372377 2.63003 -0.336026 1.12478 1.22472V1.22472Z" fill="url(#paint0_linear)"/>
      <path d="M8.99836 2.35407C6.27511 2.35407 3.68911 2.11182 2.70136 4.64682C2.29336 5.69382 2.35261 7.05357 2.35261 9.00057C2.35261 10.7091 2.29786 12.3148 2.70136 13.3536C3.68686 15.8901 6.29386 15.6471 8.99686 15.6471C11.6046 15.6471 14.2934 15.9186 15.2931 13.3536C15.7019 12.2961 15.6419 10.9566 15.6419 9.00057C15.6419 6.40407 15.7851 4.72782 14.5259 3.46932C13.2509 2.19432 11.5266 2.35407 8.99536 2.35407H8.99836ZM8.40286 3.55182C14.0834 3.54282 14.8064 2.91132 14.4074 11.6841C14.2656 14.7868 11.9031 14.4463 8.99911 14.4463C3.70411 14.4463 3.55186 14.2948 3.55186 8.99757C3.55186 3.63882 3.97186 3.55482 8.40286 3.55032V3.55182ZM12.5459 4.65507C12.1056 4.65507 11.7486 5.01207 11.7486 5.45232C11.7486 5.89257 12.1056 6.24957 12.5459 6.24957C12.9861 6.24957 13.3431 5.89257 13.3431 5.45232C13.3431 5.01207 12.9861 4.65507 12.5459 4.65507V4.65507ZM8.99836 5.58732C7.11361 5.58732 5.58586 7.11582 5.58586 9.00057C5.58586 10.8853 7.11361 12.4131 8.99836 12.4131C10.8831 12.4131 12.4101 10.8853 12.4101 9.00057C12.4101 7.11582 10.8831 5.58732 8.99836 5.58732V5.58732ZM8.99836 6.78507C11.9271 6.78507 11.9309 11.2161 8.99836 11.2161C6.07036 11.2161 6.06586 6.78507 8.99836 6.78507Z" fill="white"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear" x1="1.1593" y1="16.8503" x2="17.8884" y2="2.37146" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDD55"/>
      <stop offset="0.5" stop-color="#FF543E"/>
      <stop offset="1" stop-color="#C837AB"/>
      </linearGradient>
      <clipPath id="clip0">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
};
export default () => {
  return (
    <Layout title="Icon" description="Ini Icon">
      <Created>
        <div>Special thanks to Indra Lie has created this icon</div>
        <a href="https://www.instagram.com/indraendz/?hl=id" target="_blank"><IgIcon />@indraendz</a>
      </Created>
      <Markdown language="html">{`<i className="ini-icon ic-whatsapp">&#xe800;</i>`}</Markdown>
      <IniGrids>
        <IniGrid width={2}>
          <Icon>
            <i className="ini-icon ic-whatsapp">&#xe800;</i>
            <div className="icon-title">ic-whatsapp</div>
            <div className="icon-code">{`&#xe800;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-whatsapp2">&#xe801;</i>
            <div className="icon-title">ic-whatsapp2</div>
            <div className="icon-code">{`&#xe801;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-ponit-outline">&#xe802;</i>
            <div className="icon-title">ic-ponit-outline</div>
            <div className="icon-code">{`&#xe802;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-edit2">&#xe803;</i>
            <div className="icon-title">ic-edit2</div>
            <div className="icon-code">{`&#xe803;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon icon-ic_facebook">&#xe804;</i>
            <div className="icon-title">icon-ic_facebook</div>
            <div className="icon-code">{`&#xe804;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon icon-ic_flame">&#xe805;</i>
            <div className="icon-title">icon-ic_flame</div>
            <div className="icon-code">{`&#xe805;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon icon-ic_spinner">&#xe806;</i>
            <div className="icon-title">icon-ic_spinner</div>
            <div className="icon-code">{`&#xe806;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-wallet">&#xe807;</i>
            <div className="icon-title">ic-wallet</div>
            <div className="icon-code">{`&#xe807;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-voucher">&#xe808;</i>
            <div className="icon-title">ic-voucher</div>
            <div className="icon-code">{`&#xe808;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-verified">&#xe809;</i>
            <div className="icon-title">ic-verified</div>
            <div className="icon-code">{`&#xe809;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-user">&#xe80a;</i>
            <div className="icon-title">ic-user</div>
            <div className="icon-code">{`&#xe80a;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-user-sol">&#xe80b;</i>
            <div className="icon-title">ic-user-sol</div>
            <div className="icon-code">{`&#xe80b;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-upload">&#xe80c;</i>
            <div className="icon-title">ic-upload</div>
            <div className="icon-code">{`&#xe80c;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-trolly">&#xe80d;</i>
            <div className="icon-title">ic-trolly</div>
            <div className="icon-code">{`&#xe80d;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-trolly-sol">&#xe80e;</i>
            <div className="icon-title">ic-trolly-sol</div>
            <div className="icon-code">{`&#xe80e;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-trash">&#xe80f;</i>
            <div className="icon-title">ic-trash</div>
            <div className="icon-code">{`&#xe80f;`}</div>
          </Icon>
        </IniGrid>
        <IniGrid width={2}>
          <Icon>
            <i className="ini-icon ic-tag">&#xe810;</i>
            <div className="icon-title">ic-tag</div>
            <div className="icon-code">{`&#xe810;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-time">&#xe811;</i>
            <div className="icon-title">ic-time</div>
            <div className="icon-code">{`&#xe811;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-store">&#xe812;</i>
            <div className="icon-title">ic-store</div>
            <div className="icon-code">{`&#xe812;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-starbadge">&#xe813;</i>
            <div className="icon-title">ic-starbadge</div>
            <div className="icon-code">{`&#xe813;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-star">&#xe814;</i>
            <div className="icon-title">ic-star</div>
            <div className="icon-code">{`&#xe814;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-star-sol">&#xe815;</i>
            <div className="icon-title">ic-star-sol</div>
            <div className="icon-code">{`&#xe815;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-smartphone">&#xe816;</i>
            <div className="icon-title">ic-smartphone</div>
            <div className="icon-code">{`&#xe816;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-shield">&#xe817;</i>
            <div className="icon-title">ic-shield</div>
            <div className="icon-code">{`&#xe817;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-menu">&#xe82a;</i>
            <div className="icon-title">ic-menu</div>
            <div className="icon-code">{`&#xe82a;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-map">&#xe82b;</i>
            <div className="icon-title">ic-map</div>
            <div className="icon-code">{`&#xe82b;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-map-point">&#xe82c;</i>
            <div className="icon-title">ic-map-point</div>
            <div className="icon-code">{`&#xe82c;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-love">&#xe82d;</i>
            <div className="icon-title">ic-love</div>
            <div className="icon-code">{`&#xe82d;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-love-sol">&#xe82e;</i>
            <div className="icon-title">ic-love-sol</div>
            <div className="icon-code">{`&#xe82e;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-logout">&#xe82f;</i>
            <div className="icon-title">ic-logout</div>
            <div className="icon-code">{`&#xe82f;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-share">&#xe818;</i>
            <div className="icon-title">ic-share</div>
            <div className="icon-code">{`&#xe818;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-setting">&#xe819;</i>
            <div className="icon-title">ic-setting</div>
            <div className="icon-code">{`&#xe819;`}</div>
          </Icon>
        </IniGrid>
        <IniGrid width={2}>
          <Icon>
            <i className="ini-icon ic-search">&#xe81a;</i>
            <div className="icon-title">ic-search</div>
            <div className="icon-code">{`&#xe81a;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-send">&#xe81b;</i>
            <div className="icon-title">ic-send</div>
            <div className="icon-code">{`&#xe81b;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-scan">&#xe81c;</i>
            <div className="icon-title">ic-scan</div>
            <div className="icon-code">{`&#xe81c;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-sandbox">&#xe81d;</i>
            <div className="icon-title">ic-sandbox</div>
            <div className="icon-code">{`&#xe81d;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-review">&#xe81e;</i>
            <div className="icon-title">ic-review</div>
            <div className="icon-code">{`&#xe81e;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-reload">&#xe81f;</i>
            <div className="icon-title">ic-reload</div>
            <div className="icon-code">{`&#xe81f;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-plus">&#xe820;</i>
            <div className="icon-title">ic-plus</div>
            <div className="icon-code">{`&#xe820;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-pin">&#xe821;</i>
            <div className="icon-title">ic-pin</div>
            <div className="icon-code">{`&#xe821;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-phone">&#xe822;</i>
            <div className="icon-title">ic-phone</div>
            <div className="icon-code">{`&#xe822;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-paper">&#xe823;</i>
            <div className="icon-title">ic-paper</div>
            <div className="icon-code">{`&#xe823;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-payment-card">&#xe824;</i>
            <div className="icon-title">ic-payment-card</div>
            <div className="icon-code">{`&#xe824;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-package">&#xe825;</i>
            <div className="icon-title">ic-package</div>
            <div className="icon-code">{`&#xe825;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-notification">&#xe826;</i>
            <div className="icon-title">ic-notification</div>
            <div className="icon-code">{`&#xe826;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-more">&#xe827;</i>
            <div className="icon-title">ic-more</div>
            <div className="icon-code">{`&#xe827;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-minus">&#xe829;</i>
            <div className="icon-title">ic-minus</div>
            <div className="icon-code">{`&#xe829;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-money">&#xe828;</i>
            <div className="icon-title">ic-money</div>
            <div className="icon-code">{`&#xe828;`}</div>
          </Icon>
        </IniGrid>
        <IniGrid width={2}>
         <Icon>
            <i className="ini-icon ic-arrow-down">&#xe85a;</i>
            <div className="icon-title">ic-arrow-down</div>
            <div className="icon-code">{`&#xe85a;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-arrow-down-up">&#xe85b;</i>
            <div className="icon-title">ic-arrow-down-up</div>
            <div className="icon-code">{`&#xe85b;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-angle-up">&#xe85c;</i>
            <div className="icon-title">ic-angle-up</div>
            <div className="icon-code">{`&#xe85c;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-angle-right">&#xe85d;</i>
            <div className="icon-title">ic-angle-right</div>
            <div className="icon-code">{`&#xe85d;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-angle-left">&#xe85e;</i>
            <div className="icon-title">ic-angle-left</div>
            <div className="icon-code">{`&#xe85e;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-angle-down">&#xe85f;</i>
            <div className="icon-title">ic-angle-down</div>
            <div className="icon-code">{`&#xe85f;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-download">&#xe842;</i>
            <div className="icon-title">ic-download</div>
            <div className="icon-code">{`&#xe842;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-disable">&#xe843;</i>
            <div className="icon-title">ic-disable</div>
            <div className="icon-code">{`&#xe843;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-desktop">&#xe844;</i>
            <div className="icon-title">ic-desktop</div>
            <div className="icon-code">{`&#xe844;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-delivery">&#xe845;</i>
            <div className="icon-title">ic-delivery</div>
            <div className="icon-code">{`&#xe845;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-coution">&#xe846;</i>
            <div className="icon-title">ic-coution</div>
            <div className="icon-code">{`&#xe846;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-comment">&#xe847;</i>
            <div className="icon-title">ic-comment</div>
            <div className="icon-code">{`&#xe847;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-locked">&#xe830;</i>
            <div className="icon-title">ic-locked</div>
            <div className="icon-code">{`&#xe830;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-list2">&#xe831;</i>
            <div className="icon-title">ic-list2</div>
            <div className="icon-code">{`&#xe831;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-list2-sol">&#xe832;</i>
            <div className="icon-title">ic-list2-sol</div>
            <div className="icon-code">{`&#xe832;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-list">&#xe833;</i>
            <div className="icon-title">ic-list</div>
            <div className="icon-code">{`&#xe833;`}</div>
          </Icon>
        </IniGrid>
        <IniGrid width={2}>
          <Icon>
            <i className="ini-icon ic-list-sol">&#xe834;</i>
            <div className="icon-title">ic-list-sol</div>
            <div className="icon-code">{`&#xe834;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-info">&#xe835;</i>
            <div className="icon-title">ic-info</div>
            <div className="icon-code">{`&#xe835;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-identity">&#xe836;</i>
            <div className="icon-title">ic-identity</div>
            <div className="icon-code">{`&#xe836;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-home2">&#xe837;</i>
            <div className="icon-title">ic-home2</div>
            <div className="icon-code">{`&#xe837;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-home2-sol">&#xe838;</i>
            <div className="icon-title">ic-home2-sol</div>
            <div className="icon-code">{`&#xe838;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-home">&#xe839;</i>
            <div className="icon-title">ic-home</div>
            <div className="icon-code">{`&#xe839;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-home-sol">&#xe83a;</i>
            <div className="icon-title">ic-home-sol</div>
            <div className="icon-code">{`&#xe83a;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-globe">&#xe83b;</i>
            <div className="icon-title">ic-globe</div>
            <div className="icon-code">{`&#xe83b;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-forward">&#xe83c;</i>
            <div className="icon-title">ic-forward</div>
            <div className="icon-code">{`&#xe83c;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-filter">&#xe83d;</i>
            <div className="icon-title">ic-filter</div>
            <div className="icon-code">{`&#xe83d;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-eye">&#xe83e;</i>
            <div className="icon-title">ic-eye</div>
            <div className="icon-code">{`&#xe83e;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-eye-close">&#xe83f;</i>
            <div className="icon-title">ic-eye-close</div>
            <div className="icon-code">{`&#xe83f;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-envelope">&#xe840;</i>
            <div className="icon-title">ic-envelope</div>
            <div className="icon-code">{`&#xe840;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-edit">&#xe841;</i>
            <div className="icon-title">ic-edit</div>
            <div className="icon-code">{`&#xe841;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-close">&#xe848;</i>
            <div className="icon-title">ic-close</div>
            <div className="icon-code">{`&#xe848;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-check">&#xe849;</i>
            <div className="icon-title">ic-check</div>
            <div className="icon-code">{`&#xe849;`}</div>
          </Icon>
        </IniGrid>
        <IniGrid width={2}>
          <Icon>
            <i className="ini-icon ic-category">&#xe84a;</i>
            <div className="icon-title">ic-category</div>
            <div className="icon-code">{`&#xe84a;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-category-sol">&#xe84b;</i>
            <div className="icon-title">ic-category-sol</div>
            <div className="icon-code">{`&#xe84b;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-calendar">&#xe84c;</i>
            <div className="icon-title">ic-calendar</div>
            <div className="icon-code">{`&#xe84c;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-briefcase">&#xe84d;</i>
            <div className="icon-title">ic-briefcase</div>
            <div className="icon-code">{`&#xe84d;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-bookmark">&#xe84e;</i>
            <div className="icon-title">ic-bookmark</div>
            <div className="icon-code">{`&#xe84e;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-book">&#xe84f;</i>
            <div className="icon-title">ic-book</div>
            <div className="icon-code">{`&#xe84f;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-bigcheck">&#xe850;</i>
            <div className="icon-title">ic-bigcheck</div>
            <div className="icon-code">{`&#xe850;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-barcode">&#xe851;</i>
            <div className="icon-title">ic-barcode</div>
            <div className="icon-code">{`&#xe851;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-bag2">&#xe852;</i>
            <div className="icon-title">ic-bag2</div>
            <div className="icon-code">{`&#xe852;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-bag2-sol">&#xe853;</i>
            <div className="icon-title">ic-bag2-sol</div>
            <div className="icon-code">{`&#xe853;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-bag">&#xe854;</i>
            <div className="icon-title">ic-bag</div>
            <div className="icon-code">{`&#xe854;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-bag-sol">&#xe855;</i>
            <div className="icon-title">ic-bag-sol</div>
            <div className="icon-code">{`&#xe855;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-arrow-up">&#xe856;</i>
            <div className="icon-title">ic-arrow-up</div>
            <div className="icon-code">{`&#xe856;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-arrow-right">&#xe857;</i>
            <div className="icon-title">ic-arrow-right</div>
            <div className="icon-code">{`&#xe857;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-arrow-left">&#xe858;</i>
            <div className="icon-title">ic-arrow-left</div>
            <div className="icon-code">{`&#xe858;`}</div>
          </Icon>
          <Icon>
            <i className="ini-icon ic-arrow-left-right">&#xe859;</i>
            <div className="icon-title">ic-arrow-left-right</div>
            <div className="icon-code">{`&#xe859;`}</div>
          </Icon>
        </IniGrid>
      </IniGrids>
    </Layout>
  );
};

