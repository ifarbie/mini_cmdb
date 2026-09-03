package farizrifkyb.mini_cmdb.mapper;

import org.springframework.stereotype.Component;

import farizrifkyb.mini_cmdb.entity.Ip;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupSimpleResponse;
import farizrifkyb.mini_cmdb.model.response.IpResponse;
import farizrifkyb.mini_cmdb.model.response.IpSimpleResponse;

@Component
public class IpMapper {
    public IpSimpleResponse toSimpleResponse(Ip ip) {
        return new IpSimpleResponse(
                ip.getId(),
                ip.getIpAddress(),
                ip.getHostname(),
                ip.getDescription());
    }

    public IpResponse toResponse(Ip ip) {
        return  new IpResponse(
                        ip.getId(),
                        ip.getIpAddress(),
                        ip.getHostname(),
                        ip.getDescription(),
                        ip.getGroups()
                                .stream()
                                .map(group -> new ApplicationGroupSimpleResponse(
                                        group.getId(),
                                        group.getName(),
                                        group.getDescription()))
                                .toList());
    }
}