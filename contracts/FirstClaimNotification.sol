pragma solidity ^0.4.16;



contract FirstClaimNotification {
    // This declares a new complex type which will
    // be used for variables later.
    // It will represent a single voter.


    struct Insurance {
        uint policyNo;
        address person;
    }




    Insurance public claim;

    function FirstClaimNotification( ) public {
        claim = Insurance({policyNo: 20, person: msg.sender});

    }

    function getDetails(uint no) public view returns (address addr) {
         addr = claim.person;
    }

  }