
export const PassengerCardComponent: angular.IComponentOptions = {
    template: require('./passenger-card.component.html'),
    controllerAs: 'vm',
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    },
    controller: function() {
        this.select = () => {
            this.selectedItem = this.item;
            this.selectedItemChange(this.item);
        }
    }
}