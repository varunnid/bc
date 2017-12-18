pragma solidity ^0.4.16;



contract FirstClaimNotification {

     struct  IncidentDetails{
        uint pincode;
        bytes32 date;

        }



    struct Fnol {
        uint policyNo;
        bytes32 natureOfLoss;
        IncidentDetails incidentDetails;
    }


    mapping (address => Fnol) detailsMapping;

    address creator;

    function FirstClaimNotification( ) public {
        creator = msg.sender;

    }


    function reportLoss(bytes32 natOfLoss, uint policyNumber, uint pin , bytes32 incidentDate, address addr ) public {

        detailsMapping[addr] = Fnol({policyNo: policyNumber, natureOfLoss: natOfLoss, incidentDetails: IncidentDetails({pincode: pin, date: incidentDate}) });


    }

    function getLossDetails(address addr) public view returns (uint) {
         return detailsMapping[addr].policyNo;

    }

    function getCreator() public returns( address ){
        return creator;
    }


  }